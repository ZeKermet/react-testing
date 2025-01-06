import Header from "../page-components/Header/Header.jsx"
import Button from "../page-components/Button/Button.jsx"
import CardsContainer from "../page-components/PropsTest/PropsTest.jsx"
import List from '../page-components/RenderListTest/List.jsx'
import {StateButton, ChangeDropdown} from '../page-components/StatesTest/SetChangeTest.jsx'
import ColorPicker from '../page-components/ColorPicker/ColorPicker.jsx'
import ToDo from "../ToDo-components/ToDo.jsx"

export default function About() {
    const cardsList = [{name: "This is a test"}, {name: "This is another test"}];
    return(
        <>
            <Header />
            <CardsContainer list={cardsList} />
        </>
    )
}