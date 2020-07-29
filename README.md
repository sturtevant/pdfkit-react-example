# pdfkit-react-example
This is a simple example of using [PdfKit](https://pdfkit.org/) with React (bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).

It is based on [`pdfkit-webpack-example`](https://github.com/blikblum/pdfkit-webpack-example).

[Live preview here.](https://sturtevant.github.io/pdfkit-react-example/)

## Notes

- [`react-ace`](https://github.com/securingsincity/react-ace) is used for the in-browser code editting.
- [`customize-cra`](https://github.com/arackaf/customize-cra) is used to modify the webpack configuration so that assets like fonts and images can be imported in all the ways found in `pdfkit-webpack-example`. These customizations can be found in `config-overrides.js`.
- The initial PDF content code (`makePDF` function) has been moved into its own file (`src/makePDF.js`) so that it can be loaded separately and avoid having its formatting disrupted by Webpack/Babel.

## To Use

The first time: in the project directory, run `npm install`.

Then run `npm start` to start the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
