import React, { useEffect, useState } from 'react';
import getCategory from '../../services/categories/getCategory';
import { ListGroup } from 'react-bootstrap';

const ListCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategoriesData = async () => {
            const categoriesData = await getCategory();
            setCategories(categoriesData);
        };
        getCategoriesData()
    }, [])

    return (
        <ListGroup>
            {
                categories && categories.map(category => {
                    return (
                        <ListGroup.Item>{category.name}</ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    );
}

export default ListCategories;