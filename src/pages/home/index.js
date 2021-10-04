import Routes from "../../routes"
import { MainWrapper } from "./styled"


export default function Home (){
    return(
        <MainWrapper>
            <div className='sidebar'/>
            <Routes/>
        </MainWrapper>
    )
}