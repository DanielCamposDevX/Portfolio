import Button from '@mui/material/Button';


export default function PageHeader() {
    return (
        <header className="w-full h-40 absolute top-0 left-0  flex justify-around items-center">
            <Button variant="text" color="secondary" sx={{fontWeight:'700', fontSize: '15px', padding: '40px', ":hover":{ backgroundColor: '#ffffff2f'}, }}>SOBRE MIM</Button>
            <Button variant="text" color="secondary" sx={{fontWeight:'700', fontSize: '15px', padding: '40px', ":hover":{ backgroundColor: '#ffffff2f'}, }}>Portfólio</Button>
            <Button variant="text" color="secondary" sx={{fontWeight:'700', fontSize: '15px', padding: '40px', ":hover":{ backgroundColor: '#ffffff2f'}, }}>skills</Button>
            <Button variant="text" color="secondary" sx={{fontWeight:'700', fontSize: '15px', padding: '40px', ":hover":{ backgroundColor: '#ffffff2f'}, }}>Contato</Button>
        </header>
    )
}