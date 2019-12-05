const CriminalComponent = criminal => {
    return `
            <section class="criminal__list">
            <dl>
            <div class="name">${criminal.name}</div>
            <br/>
            <div class="age">Age: ${criminal.age}</div>
            <div class="conviction">Conviction: ${criminal.conviction}</div>
            <hr/>
            <div class="conviction__start">Start date: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="conviction__end">End date: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            </dl>
            </section>
    `
}

export default CriminalComponent
