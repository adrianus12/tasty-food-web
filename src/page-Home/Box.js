const Box = ({image}) => {
    return (  
        <div className="box">
            <img src={image} alt="" />
            <h2>LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, feugiat vel luctus et, tincidunt tincidunt purus.</p>
        </div>
    );
}
 
export default Box;