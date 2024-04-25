import { Component } from '../core/Component';
import { Button } from './Button';

export class YourComponent extends Component {
	setup(props) {
		this.state = {
			counter: 0,
		};

		// Создаем корневой элемент
		this.$rootElement = document.createElement('div');

		// Устанавливаем ему класс, чтобы можно было стилизовать
		this.$rootElement.className = 'component';

		// Создаем дочерний элемент
		const $heading = document.createElement('h1');
		$heading.textContent = `${props.heading}: ${this.state.counter}`;
		this.$heading = $heading;

		// Добавляем заголовок в корневой элемент
		this.$rootElement.appendChild($heading);

		// Передаем в кнопку входные параметры — текст и callback-функцию,
		// которая должна вызваться при клике на нее
		const incrementButton = new Button({
			text: 'Увеличить счетчик',
			onClick: this.handleClick.bind(this), // Закрепляем контекст
		});
		// При добавлении на страницу также используем $rootElement
		this.$rootElement.appendChild(incrementButton.$rootElement);
	}
	handleClick(event) {
		this.state.counter++;
		this.$heading.textContent = `${this.props.heading}: ${this.state.counter}`;
	}
}
