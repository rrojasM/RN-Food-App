import { CategoryRepositoryImp } from "../../../data/repositories/CategoryRepository";
const { getAll } = new CategoryRepositoryImp();

export const GetAllCategoryCase = async () => {
    return await getAll();
}


