function Body() {
    return <div style= {style.contentsection} className= "contentsection">
        <p>content section</p>
      
      </div>;
  }

  const style = {
    contentsection: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "60vh",
      marginTop: "10vh",        
      padding: "20px",          
      textAlign: "center",    
        
    }
  }



  export default Body;
  