const sendEmailByJS = async (serviceId, tempateId, variables) => {
    await window.emailjs.send(
        serviceId, tempateId,
        variables
    )
}

export { sendEmailByJS };