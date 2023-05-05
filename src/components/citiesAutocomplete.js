import { Autocomplete, TextField, Box } from '@mui/material'

const cities = ['Amsterdam', 'Athens', 'Atlanta', 'Auckland', 'Austin', 'Bali', 'Baltimore', 'Bangkok', 'Barcelona', 'Beijing', 'Belgrade', 'Belfast', 'Berlin', 'Bilbao', 'Birmingham', 'Bogotá', 'Boston', 'Bratislava', 'Brisbane', 'Brussels', 'Bucharest', 'Budapest', 'Buenos Aires', 'Cairo', 'Calgary', 'Cancún', 'Cape Town', 'Cardiff', 'Chennai', 'Chicago', 'Christchurch', 'Copenhagen', 'Córdoba', 'Dallas', 'Darwin', 'Delhi', 'Denver', 'Detroit', 'Dubai', 'Dublin', 'Düsseldorf', 'Edinburgh', 'Florence', 'Frankfurt', 'Galway', 'Geneva', 'Glasgow', 'Gothenburg', 'Granada', 'Guadalajara', 'Guangzhou', 'Halifax', 'Hamburg', 'Hanoi', 'Havana', 'Helsinki', 'Hobart', 'Hong Kong', 'Honolulu', 'Houston', 'Istanbul', 'Jaipur', 'Jakarta', 'Johannesburg', 'Kansas City', 'Kaohsiung', 'Kiev', 'Krakow', 'Kuala Lumpur', 'Kyoto', 'Lahore', 'Las Vegas', 'Leeds', 'Lille', 'Lima', 'Lisbon', 'Liverpool', 'Ljubljana', 'London', 'Los Angeles', 'Louisville', 'Luxembourg', 'Lviv', 'Lyon', 'Madrid', 'Málaga', 'Manchester', 'Manila', 'Marseille', 'Medellín', 'Melbourne', 'Memphis', 'Mexico City', 'Miami', 'Milan', 'Minneapolis', 'Montreal', 'Moscow', 'Mumbai', 'Munich', 'Nairobi', 'Naples', 'Nashville', 'New Orleans', 'New York City', 'Nice', 'Nicosia', 'Nuremberg', 'Osaka', 'Oslo', 'Ottawa', 'Oxford', 'Palermo', 'Paris', 'Perth', 'Philadelphia', 'Phoenix', 'Phuket', 'Pittsburgh', 'Portland', 'Porto', 'Prague', 'Pune', 'Quebec City', 'Quito', 'Reykjavik', 'Riga', 'Rio de Janeiro', 'Rome', 'Rotterdam', 'Saint Petersburg', 'Salzburg', 'San Diego', 'San Francisco', 'San Jose', 'San Juan', 'San Salvador', 'Santiago', 'Santo Domingo', 'São Paulo', 'Seattle', 'Seoul', 'Shanghai', 'Siem Reap', 'Singapore', 'Sofia', 'Stockholm', 'Strasbourg', 'Stuttgart', 'Surabaya', 'Sydney', 'Taipei', 'Tallinn', 'Tbilisi', 'Tehran', 'Tel Aviv', 'Thessaloniki', 'Tokyo', 'Toronto', 'Toulouse', 'Tucson', 'Turin', 'Ubud', 'Valencia', 'Vancouver', 'Venice', 'Verona', 'Vienna', 'Vientiane', 'Vilnius', 'Warsaw', 'Washington D.C.', 'Wellington']



export const CitiesAutocomplete =() => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="100px"
            >

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Destination"/>}
            />
        </Box>
    )
}