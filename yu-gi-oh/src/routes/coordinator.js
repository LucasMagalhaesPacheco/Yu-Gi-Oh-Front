export const goToHome = (navigate) => {
    navigate('/')
}

export const goToDuelTerminal = (navigate) => {
    navigate("/DuelTerminal")
}

export const goToWorldChalice = (navigate) => {
    navigate("/WorldChalice")
}

export const goToBranded = (navigate) => {
    navigate("/Branded")
}

export const goToPreviousPage = (navigate) => {
    navigate(-1)
}

export const goToFirstAge = (navigate) => {
    navigate("/DuelTerminal/FirstAge")
}


export const goToFirstAgeCards = (navigate, name) => {
    navigate(`/DuelTerminal/FirstAge/${name}`)
}


export const goToSecondAge = (navigate) => {
    navigate("/DuelTerminal/SecondAge")
}

export const goToSecondAgeCards = (navigate, name) => {
    navigate(`/DuelTerminal/SecondAge/${name}`)
}
export const goToThirdAge = (navigate) => {
    navigate("/DuelTerminal/ThirdAge")
}

export const goToDetails = (navigate, id) => {
    navigate(`/Details/${id}`)
}

