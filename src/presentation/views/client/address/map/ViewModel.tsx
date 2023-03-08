import React, { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Camera } from 'react-native-maps';

const MapsViewModel = () => {
    const [messagePermissions, setMessagePermissions] = useState('');
    const [position, setPosition] = useState<Location.LocationObjectCoords>();
    const [refPoint, setRefPoint] = useState({
        name: '',
        latitude: 0.0,
        longitude: 0.0,
    });
    const mapRef = useRef<MapView | null>(); //INICIALIZAR EN NULL REF

    useEffect(() => {
        const requestPermissions = async () => {
            const foreground = await Location.requestForegroundPermissionsAsync();
            if (foreground.granted) {
                startForegroundUpdate();
            }
        }

        requestPermissions();
    }, []);

    const onRegionChange = async (latitud: number, longitude: number) => {
        try {
            const place = await Location.reverseGeocodeAsync({
                latitude: latitud,
                longitude: longitude
            });


            let city;
            let street;
            let streetNumber;

            place.find(p => {
                city = p.city;
                street = p.street;
                streetNumber = p.streetNumber;

                setRefPoint({
                    name: `${street}, ${streetNumber}, ${city}`,
                    latitude: latitud,
                    longitude: longitude
                })
            })
        } catch (error) {
            console.log('ERROR: ', error);

        }
    }

    const startForegroundUpdate = async () => {
        const { granted } = await Location.getForegroundPermissionsAsync();
        if (!granted) {
            setMessagePermissions('Permiso de ubicación denegado');
        }
        const location = await Location.getLastKnownPositionAsync(); //OBTIENE LA UBICACÓN UNA SOLA VEZ
        setPosition(location.coords);

        const newCamera: Camera = {
            center: {
                latitude: location.coords.latitude!,
                longitude: location.coords.longitude!
            },
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 0
        };

        mapRef.current?.animateCamera(newCamera, { duration: 2000 });
    }
    return {
        messagePermissions,
        position,
        mapRef,
        ...refPoint,
        onRegionChange
    }
}

export default MapsViewModel;