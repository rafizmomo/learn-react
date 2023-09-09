

const Header = ({ title }) => {

    return (
        <>
            <h1 className="text-center text-lg font-semibold">{title ? title : 'Judul Halaman'}</h1>
        </>
    )
}

export default Header