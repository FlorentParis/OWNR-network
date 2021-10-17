class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    home() {
        displayFooter();
    }

    render() { return (
        <div>
            <button onClick={this.home.bind(this)}>
                <img src="assets/icons/home.svg" alt="" />
            </button>
            <button>
                <img src="assets/icons/search.svg" alt="" />
            </button>
            <button id="add">
                <span></span>
                <span></span>
            </button>
            <button>
                <img src="assets/icons/comment.svg" alt="" />
            </button>
            <button>
                <img src="assets/icons/person.svg" alt="" />
            </button>
        </div>
    )}

}

function displayFooter() {
    ReactDOM.render(
        <Footer/>,
        document.querySelector('footer')
    );
}