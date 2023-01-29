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

export const goToAllyOfJustice = (navigate) => {
    navigate("/DuelTerminal/FirstAge/AllyOfJustice")
} 

export const goToFlamvell = (navigate) => {
    navigate("/DuelTerminal/FirstAge/Flamvell")
}

export const goToFlabed = (navigate) => {
   navigate("/DuelTerminal/FirstAge/Fabled")
}

export const goToGenex = (navigate) => {
    navigate("/DuelTerminal/FirstAge/Genex")
}

export const goToIceBarrier = (navigate, name) => {
    navigate(`/DuelTerminal/FirstAge/${name}`)
}

export const goToJurrac = (navigate) => {
    navigate("/DuelTerminal/FirstAge/Jurrac")
}

export const goToMistValley = (navigate) => {
    navigate("/DuelTerminal/FirstAge/MistValley")
}

export const goToNaturia = (navigate) => {
    navigate("/DuelTerminal/FirstAge/Naturia")
}

export const goToWorms = (navigate) => {
    navigate("/DuelTerminal/FirstAge/Worms")
}

export const goToXSaber = (navigate) => {
    navigate("/DuelTerminal/FirstAge/XSaber")
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

