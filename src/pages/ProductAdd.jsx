import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button} from 'semantic-ui-react'
import YepTextInput from '../utilities/customFormControls/YepTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: "" }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunludur"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur.")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <YepTextInput name="productName" placeholder="Ürün Adı"/>
                    <YepTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
