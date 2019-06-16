'use strict';


let game = {
    run() {
        let newGame = true;
        while (newGame === true) {
            let correctAnswers = 0;
            let answeredQuestions = 0;
            let currentAnswer = "";
            console.log('Начинаем новую игру!');

            //Начинаем задавать вопросы
            for (let index = 0; index < questions.length; index++) {

                //Выводим вопрос и варианты ответов
                console.log(`Вопрос №${index + 1}:\n${questions[index].question}`);
                console.log('Варианты ответов:');
                questions[index].answers.forEach((answer, index) => {
                    console.log(`${index + 1}) ${answer}`)
                });
                console.log(`Для ответа введите число от 1 до ${questions[index].answers.length}`);

                //Получаем ответ на вопрос
                currentAnswer = game.getAnswer(questions[index].answers.length);
                if (currentAnswer === questions[index].corrrectAnswer) {
                    correctAnswers++;
                }

                if (currentAnswer === null) {
                    break;
                } else {
                    answeredQuestions++;
                }
            }

            //Завершаем игру
            game.end(questions.length, answeredQuestions, correctAnswers);
            newGame = game.renew();
        }
    },
    /**
     *Функция завершения игры и вывода результата
     *
     * @param {*} total общее количество вопросов
     * @param {*} answered количество отвеченных вопросов
     * @param {*} correct количество верных ответов
     */
    end(total, answered, correct) {
        let text = "";
        switch (answered) {
            case 1:
                text = 'вопрос';
                break;
            case 2:
            case 3:
            case 4:
                text = 'вопроса';
                break;
            default:
                text = 'вопросов';
        }
        console.log(`Даны ответы на ${answered} ${text} из ${total}.\nВерных ответов: ${correct}`);
        if (correct === total) {
            console.log(`ПОЗДРАВЛЯЕМ С ПОБЕДОЙ! УРА!`);
        }

    },
    /**
     *Задает вопрос об еще одной игре
     *
     * @returns {boolean}
     */
    renew() {
        console.log(`Для повторной игры введите 1`);
        if (+prompt(`Для повторной игры введите 1`) === 1) {
            return true;
        } else {
            console.log('Игра окончена.');
            return false;
        }
    },
    /**
    *Функция получения ответа пользователя на вопрос
    *
    * @param {int} maxValue
    * @returns 
    */
    getAnswer(maxValue) {
        let answer = prompt(`Для ответа введите число от 1 до ${maxValue}`);
        if (answer === null) {
            console.log(`Игра закончена досрочно.`);
            return answer;
        }
        answer = +answer;
        if (Number.isInteger(answer) && answer >= 1 && answer <= maxValue) {
            console.log(`Ваш ответ: ${answer}`);
            return answer;
        } else {
            console.log(`Нет такого варианта ответа.\nДля ответа введите число от 1 до ${maxValue}`);
            answer = this.getAnswer(maxValue);
            return answer;
        }
    },

    init() {
        console.log(`Добро пожаловать в игру "Кто хочет стать миллионером!"`);
        console.log(`Вам будут заданы ${questions.length} вопросов. \nЧтобы начать игру наберите game.run() и нажмите Enter.`);
        //game.run();
    }
}
game.init();