import React, { useState, useEffect, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryCase } from '../../../../../domain/useCases/category/CreateCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

const AddressViewModel = () => {
    const [values, setValues] = useState({
        address: '',
        location: '',
        references: '',
    });
    const [resMessage, setResMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<any>();

    const { create } = useContext(CategoryContext);


    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const saveAddress = async () => {
        /*   setLoading(true);
          const res = await create(values, file);
          if (res.success) {
              setResMessage(res.message);
              setLoading(false);
              resetForm();
          } else {
              setResMessage(res.message);
              setLoading(false);
              resetForm();
          } */

    }

    const resetForm = async () => {
        setValues({
            address: '',
            location: '',
            references: '',
        })
    }

    return {
        ...values,
        onChange,
        loading,
        resMessage,
        saveAddress
    }
}


export default AddressViewModel;
