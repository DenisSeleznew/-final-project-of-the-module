import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
	setup(props) {
		this.state = {
			total: 0,
			donates: [],
		};
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'app';

		const $headingTotal = document.createElement('h1');
		$headingTotal.className = 'total-amount';
		$headingTotal.textContent = 'Итого: $';
		const $spanInHeadingTotal = document.createElement('span');
		$spanInHeadingTotal.textContent = this.state.total;
		$headingTotal.append($spanInHeadingTotal);
		this.$rootElement.appendChild($headingTotal);
		this.$total = $spanInHeadingTotal;

		// ...

		const donateForm = new Form();
		this.$rootElement.appendChild(donateForm.$rootElement);
		const donateList = new List();
		this.$rootElement.appendChild(donateList.$rootElement);
	}

	onItemCreate(amount) {
		// ...
	}
}
