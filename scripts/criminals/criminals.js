const noteFormContainer = criminal => {
    return `

    <article class="noteFormContainer"></article>

            <section class="criminal__list card">
            <dl>
            
            <div class="name">${criminal.name}</div>
            <br/>
            <div class="age">Age: ${criminal.age}</div>
            <div class="conviction">Conviction: ${criminal.conviction}</div>
            <hr/>
            <div class="conviction__start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="conviction__end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            <div><img src="scripts/assets/IMG_3318.jpg" alt=""></div>
            </dl>
            <button id="associates">Associates</button>
            </section>
    `
}

export default noteFormContainer
