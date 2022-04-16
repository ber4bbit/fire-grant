import React from 'react'

import { useFormik } from 'formik';

import { TextField } from '@mui/material';

const PrinterModal = () => {
    
    const validate = values => {
        const errors = {};

        if (!values.userName) errors.userName = 'Обязательное поле';
        if (!values.userNumber) errors.userNumber = 'Обязательное поле';

        if (!values.userTrouble) errors.userTrouble = 'Обязательное поле';

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            userNumber: '',
            userTrouble: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div>
            <div className="modal fade" id="printerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Настройка принтера или МФУ</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body custom-modal-body">
                            <form onSubmit={ formik.handleSubmit }>
                            <TextField variant='standard' label='Ваше имя*' name='userName' onChange={ formik.handleChange } value={ formik.values.userName }></TextField>
                            { formik.errors.userName ? <div className='modal-error-text'>{ formik.errors.userName }</div> : null }
                            <TextField variant='standard' label='Ваш телефон*' name='userNumber' onChange={ formik.handleChange } value={ formik.values.userNumber }></TextField>
                            { formik.errors.userNumber ? <div className='modal-error-text'>{ formik.errors.userNumber }</div> : null }
                            <TextField variant='standard' label='Опишите проблему' name='userTrouble' onChange={ formik.handleChange } value={ formik.values.userEmail }></TextField>
                            { formik.errors.userTrouble ? <div className='modal-error-text'>{ formik.errors.userTrouble }</div> : null }
                            <button type="submit" className="btn btn-primary">Отправить</button>
                            <h6>Нажимая кнопку я соглашаюсь с обработкой персональных данных.</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrinterModal;
