import LogoImage from './../../assets/images/logoB.png'
const Logo = ({bg}) => {
    if(bg){
       return <img src={LogoImage} style={{objectFit:"contain"}} className="df fit-conent" alt=""height={700} />
    }
    return (
        <div className="logo">
            <img src={LogoImage} className="df row" alt="" />
        </div>
    )
}
export default Logo