const login = () => {
    const [ls, setLs] = useState(false)

    const handleLogin = () => {
        setLs(!ls)
    }
    return (
        <div>
            <button style={{}} onClick={handleLogin}>
                로그인
            </button>
            <div style={{ color: "white", marginLeft: "10px" }}>
                로그인해주세요!
            </div>
        </div>
    );
}

export default login