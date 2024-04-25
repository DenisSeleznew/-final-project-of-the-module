import { App } from './components/App';
// import { DemoCounter } from './components/Demo/DemoCounter';
import { YourComponent } from './components/YourComponent';
import './index.css';

document.addEventListener('DOMContentLoaded', function () {
	document.body.appendChild(new App().$rootElement);
	document.body.appendChild(
		new DemoCounter({ title: 'App counter' }).$rootElement
	);
});

document.addEventListener('DOMContentLoaded', function () {
	const yourComponent = new YourComponent({ heading: 'Hello world' });
	document.body.appendChild(yourComponent.$rootElement);
});
