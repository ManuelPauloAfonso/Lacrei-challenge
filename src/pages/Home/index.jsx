
import Cards from '../../components/Card'
import * as data from '../../data.json'
import { Container} from './style'


console.log(data.steps)

export default function Home() {
    return (
        <Container>
            <header>
                    Cards and timer
            </header>
            {
                data.steps.map((item, index, durations) => {
                    <Cards key={index}>
                       <p>{item.key}: {item.value}, duration: {durations[item.key]} </p>
                    </Cards>
                })
            }
           
       </Container>
    )
}