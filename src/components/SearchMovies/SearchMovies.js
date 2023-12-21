import { Formik } from "formik";
import { BiSolidCameraMovie } from "react-icons/bi"; 
import { BtnFormik, InputField, SearchForm } from "./SearchMovies.styled";

export const SearchMovies = ({handleSubmit}) => {
    
    return (
        <Formik
            initialValues={{ query: ''}}
            onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
            }}
            >
            {() => (
                <SearchForm>
                <InputField type="name" name="query" />
                <BtnFormik type="submit">
                    <BiSolidCameraMovie />
                </BtnFormik>
                
                </SearchForm>
            )}
            </Formik>
    )
}