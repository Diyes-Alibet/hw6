import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from'../../styles/All.module.css';

const FormComponent = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    const [dataList, setDataList] = useState([]);

    const handleFormSubmit = (formData) => {
        setDataList((prevList) => [...prevList, formData]);
        reset();
    };

    const deleteRow = (index) => {
        setDataList(dataList.filter((_, i) => i !== index));
    };

    const clearTable = () => {
        setDataList([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label>Имя</label>
                    <input
                        {...register("name", { required: "Имя обязательно" })}
                        type="text"
                        className={errors.name ? styles.errors : ''}
                    />
                    {errors.name && <small className={styles['error-message']}>{errors.name.message}</small>}
                </div>
                <div>
                    <label>Никнейм</label>
                    <input
                        {...register("username", { required: "Никнейм обязателен" })}
                        type="text"
                        className={errors.username ? styles.errors : ''}
                    />
                    {errors.username && <small className={styles['error-message']}>{errors.username.message}</small>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        {...register("email", { required: "Email обязателен" })}
                        type="email"
                        className={errors.email ? styles.errors : ''}
                    />
                    {errors.email && <small className={styles['error-message']}>{errors.email.message}</small>}
                </div>
                <div>
                    <label>Телефон</label>
                    <input
                        {...register("phone", { required: "Телефон обязателен" })}
                        type="text"
                        className={errors.phone ? styles.errors : ''}
                    />
                    {errors.phone && <small className={styles['error-message']}>{errors.phone.message}</small>}
                </div>
                <div>
                    <label>Вебсайт</label>
                    <input
                        {...register("website")}
                        type="text"
                    />
                </div>
                <button type="submit">Добавить</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Никнейм</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Вебсайт</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {dataList.length > 0 ? (
                    dataList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>
                                <button onClick={() => deleteRow(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">Таблица пуста</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default FormComponent;
