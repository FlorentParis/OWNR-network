class Discover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
        this.slides = this.createSlides();
        this.browse = this.createBrowse();
    }

    displayImg(src) {
        ReactDOM.render(
            <DisplayImage src={src}/>,
            document.querySelector('#imgFull')
        );
    }

    createSlides() {
        const listSlides = [];

        for(let i = 1; i < 5; i++) {
            let slide = <div class="slide">
                <div class="imageSlideContainer">
                    <img src={this.props.users[i].pic[0]} alt="" onClick={this.displayImg.bind(this, this.props.users[i])}/>
                </div>
                <div class="legendSlide">
                    <img src={this.props.users[i].pp} alt="" />
                    <div>
                        <span>{this.props.users[i].user}</span>
                        <span>{this.props.users[i].id}</span>
                    </div>
                </div>
            </div>
            listSlides.push(slide);
        }
        return listSlides;
    }

    createBrowse() {
        const listPic = [];
        const listPic2 = [];
        for(let i = 5; i < 15; i++){
            if(i % 2 != 0){
                listPic.push(<img src={"assets/img/pic/pic" + i + ".png"} alt="" onClick={this.displayImg.bind(this, "assets/img/pic/pic" + i + ".png")}/>);
            }else{
                listPic2.push(<img src={"assets/img/pic/pic" + i + ".png"} alt="" onClick={this.displayImg.bind(this, "assets/img/pic/pic" + i + ".png")}/>);
            }
        }
        return <div id="containerBrowse">
            <div>
                {listPic}
            </div>
            <div>
                {listPic2}
            </div>
        </div>
    }

    render() {
        return <div id="containerDiscover">
            <div id="SliderDiscover">
                <span id="titleDiscover">Discover</span>
                <span class="titleSection">What’s new today</span>
                <div id="containerSlider">
                    {this.slides}
                </div>
            </div>
            <div id="browseDiscover">
                <span class="titleSection">Browse all</span>
                {this.browse}
            </div>
            <div>
                <button id="btnMore">SEE MORE</button>
            </div>
        </div>
    }

}

function displayDiscover() {

    getPosts().then(function(datas) {
    
        ReactDOM.render(
            <Discover users={datas}/>,
            document.querySelector('#render')
        );
        displayFooter();
    });
}