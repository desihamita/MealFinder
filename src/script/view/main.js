import DataSource from "../data/data-source.js";
import '../component/search-bar.js';
import '../component/meal-list.js';

const main = () => {
    const baseUrl = 'https://books-api.dicoding.dev';

    const getBook = async() => {
        try {
            const response = await fetch(`${baseUrl}/list`);
            const responseJson = await response.json();

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.books);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const searchElement = document.querySelector('search-bar');
    const mealListElement = document.querySelector('meal-list');

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };


    const renderResult = (results) => {
        mealListElement.meals = results;
    };

    const fallbackResult = (message) => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;