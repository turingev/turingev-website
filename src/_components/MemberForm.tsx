export default () => {
  return (
    <>
      <form action="/api/apply-member" method="post">
        <h3>Persönliche Angaben</h3>
        <div class="flex flex-wrap my-2 mx-[-0.25rem]">
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="name">Vorname</label>
            <input
              class="input w-full"
              type="text"
              placeholder="Alan"
              id="name"
              name="name"
              required
            />
          </div>
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="surname">Nachname</label>
            <input
              class="input"
              type="text"
              placeholder="Turing"
              id="surname"
              name="surname"
              required
            />
          </div>
        </div>

        <div class="flex flex-wrap my-2 mx-[-0.25rem]">
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="birthday">Geburtsdatum</label>
            <input
              class="input"
              type="date"
              placeholder="23. Juni 1912"
              id="birthday"
              name="birthday"
              required
            />
          </div>
        </div>
        <hr />

        <h3>Kontaktdaten</h3>
        <div class="flex flex-wrap my-2 mx-[-0.25rem]">
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="email">Mail</label>
            <input
              class="input"
              type="email"
              placeholder="test@mailbox.org"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="phone">Telefon</label>
            <input
              class="input"
              type="text"
              placeholder="0351 685693"
              id="phone"
              name="phone"
            />
          </div>
        </div>

        <div class="flex flex-wrap my-2 mx-[-0.25rem]">
          <div class="flex flex-col p-1 w-full md:w-1/3">
            <label for="street">Straße</label>
            <input
              class="input"
              type="text"
              placeholder="Turingstraße"
              id="street"
              name="street"
              required
            />
          </div>
          <div class="flex flex-col p-1 w-1/2 md:w-1/6">
            <label for="housenumber">Hausnummer</label>
            <input
              class="input"
              type="text"
              placeholder="12"
              id="housenumber"
              name="housenumber"
              required
            />
          </div>
          <div class="flex flex-col p-1 w-1/2 md:w-1/6">
            <label for="zipcode">Postleitzahl</label>
            <input
              class="input"
              type="text"
              placeholder="01217"
              id="zipcode"
              name="zipcode"
              required
            />
          </div>
          <div class="flex flex-col p-1 w-full md:w-1/3">
            <label for="town">Stadt</label>
            <input
              class="input"
              type="text"
              placeholder="Dresden"
              id="town"
              name="town"
              required
            />
          </div>
        </div>
        <hr />

        <h3>Zahlungsdaten</h3>
        <div class="flex flex-wrap my-2 mx-[-0.25rem]">
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="iban">IBAN</label>
            <input
              class="input"
              type="text"
              placeholder="DEXX XXXX XXXX XXXX XXXX XX"
              id="iban"
              name="iban"
              required
            />
          </div>
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="bank">Bankinstitut</label>
            <input
              class="input"
              type="text"
              placeholder="Alan Turing Bank"
              id="bank"
              name="bank"
              required
            />
          </div>
        </div>

        <div class="flex flex-wrap my-2 mx-[-0.25rem]">
          <div class="flex flex-col p-1 w-full md:w-1/2">
            <label for="contribution">Freiwilliger Jahresförderbeitrag</label>
            <input
              class="input"
              type="text"
              placeholder="bspw. 60,00€"
              id="contribution"
              name="contribution"
              required
            />
          </div>
        </div>

        <div class="flex items-start my-2 p-2 dark:border-white border-gray-400 border">
          <div class="p-3">
            <input type="checkbox" name="sepa" class="toggle" />
          </div>
          <div class="p-1">
            <p>
              Ich ermächtige den Turing e.V., regelmäßig Zahlungen von meinem
              Konto mittels Lastschrift einzuziehen. Zugleich weise ich mein
              Kreditinstitut an, die vom Turing e.V. auf mein Konto gezogenen
              Lastschriften einzulösen.
            </p>
            <p class="text-sm">
              Gläubiger-Identifikationsnummer: DE16ZZZ00002515473. Die
              Mandatsreferenz wird mit der Bestätigung der Aufnahme mitgeteilt.
            </p>
            <p class="text-sm italic">
              Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem
              Belastungsdatum, die Erstattung des belasteten Betrages verlangen.
              Es gelten dabei die mit meinem Kreditinstitut vereinbarten
              Bedingungen.
            </p>
          </div>
        </div>

        <h3>Deine Nachricht an uns</h3>
        <textarea
          class="input w-full"
          placeholder="Lieber Turing e.V.,"
          id="message"
          name="message"
        >
        </textarea>
        <button class="btn btn-primary my-2" type="submit">
          Fördermitglied werden!
        </button>
      </form>
    </>
  );
};
