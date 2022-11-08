function Footer(){
    return(
        <footer className="bg-light px-5 pt-3">
            <div className="logo ">
                <img src={require("../../assets/bookworm_icon.svg").default} alt="" />
            </div>
            <div className="ms-4 pb-3" id="infor">
                <h4 className="my-0">BOOKWORM</h4>
                <p>Address: Nguyen Huu Tho Street, Tan Phong Ward, Ho Chi Minh City</p>
                <p>Phone: 0969004098</p>
            </div>
        </footer>
    );
    }
    
    export default Footer;