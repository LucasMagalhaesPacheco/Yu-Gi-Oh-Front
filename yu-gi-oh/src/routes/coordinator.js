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


export const goToAgeCards = (navigate, age, name) => {
    navigate(`/DuelTerminal/${age}/${name}`)
}


export const goToSecondAge = (navigate) => {
    navigate("/DuelTerminal/SecondAge")
}


export const goToThirdAge = (navigate) => {
    navigate("/DuelTerminal/ThirdAge")
}

export const goToDetails = (navigate, id) => {
    navigate(`/Details/${id}`)
}

