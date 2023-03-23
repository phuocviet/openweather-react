import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, Accordion} from 'react-accessible-accordion'
import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ]

const Forecast = ({data}) =>{

    const dayInAWeek = new Date().getDate();
    const forecastdays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );
   
    //let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(dayInAWeek)

    return (
    <>
    
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
                <AccordionItemHeading>
                    <AccordionItemButton >
                        <div className='daily-item'>
                            <label className='day'>{forecastdays[idx]}</label>
                            <label className='minTemp'>{Math.round(item.main.temp_min)}°C</label>
                            <label className='maxTemp'>{Math.round(item.main.temp_max)}°C</label>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
            
            ))}
            
        </Accordion>
    </>
    )
}

export default Forecast