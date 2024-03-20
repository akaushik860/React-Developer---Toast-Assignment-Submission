import React from 'react'
import PropTypes from "prop-types"


const Toast = ({type="default",backgroundColor="red",icon= true,text="Default Float",swapIcon="info",divider=true,action=true, closeAction=true, handleButton,handleClose}) => {
    const styles = {
        backgroundColor: backgroundColor
    }
  return (
    <div style={{display:"flex", backgroundColor:"#282829",color:"white",height:"48px",width:"400px",justifyContent:"space-between",padding:"0px 10px",borderRadius:"10px"}}>
       <div style={{display:"flex", alignItems:"center",gap:"10px"}}>
        {(type === "Notification" && icon === true) && <img src={`/assets/images/${swapIcon}.png`} width="24px" height="24px"></img>}
         <span>{text}</span>
       </div>
       <div style={{display:"flex",alignItems:"center",gap:"10px",paddingLeft:"10px",borderLeft:`${divider ? "1px solid #424242" : ""} `,marginTop:"10px",marginBottom:"10px"}}>
        {action && <button onClick={handleButton} style={{border:"none", borderRadius:"3px",backgroundColor: backgroundColor,color:"white",height:"100%"}}>Button</button>}
        {closeAction && <img onClick={handleClose} src='/assets/images/close.png' width="24px" height="24px"></img>}
       </div>
    </div>
  )
}

Toast.propTypes = {
  type: PropTypes.oneOf(['Default', 'Notification']),
  color: PropTypes.string,
  icon: PropTypes.bool,
  divider: PropTypes.bool,
  swapIcon: PropTypes.oneOf(['info', 'warning','success','alert','trash']),
  text: PropTypes.string,
  action: PropTypes.bool,
  closeAction: PropTypes.bool,
  handleButton: PropTypes.func,
  handleClose: PropTypes.func,
}

export default Toast