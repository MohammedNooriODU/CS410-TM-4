export default function Solution() {
  return (
    <div className="hero bg-base-300 min-h-screen bg-transparent py-6">
      <div className="hero-content text-left bg-white border-purple-500 animated-gradient rounded-3xl p-16 border-4">
        <div className="max-w-md text-black">
          <h1 className="text-5xl font-bold">User Stories</h1>
          <br></br>
          <h2 className="text-5x1 font-bold">Hungry Person</h2>

          <ul className="py-6 text-lg text-black">
            Login Page <br></br>
            <li>
              As a hungry person, I would like my data such as name, email and
              pass word to be securely stored.
            </li>
            <li>
              As a hungry person, I would like to have the option to recover my
              password.
            </li>
            <li>
              As a hungry person, I would like to have the option for GrubTurbo
              to remember login information after relaunching the app.
            </li>
            <li>
              As a hungry person, I would like for the app to ask what are my
              food preferences.
            </li>
            <li>
              As a hungry person, I would like for the app to ask what are my
              allergies.
            </li>
            <li>
              As a hungry person, I would like for the option to report a
              restaurant for reasons such as health violations.
            </li>
          </ul>

          <ul className="py-6 text-lg text-black">
            Location <br></br>
            <li>
              As a hungry person, I would like the option to set my location
              using google maps.
            </li>
            <li>
              As a hungry person, I would like the option to set my location
              using the location button on my device.
            </li>
            <li>
              As a hungry person, I would like to set how far I am able to
              travel.
            </li>
          </ul>

          <ul className="py-6 text-lg text-black">
            Swiping <br></br>
            <li>
              As a hungry person, I would like to see the name and picture of
              the resturant.
            </li>
            <li>
              As a hungry person, I would like to see the distance of the
              restuant from my location.
            </li>
            <li>
              As a hungry person, I would like for a left swipe to decline the
              restaurant and show a new restaurant.
            </li>
            <li>
              As a hungry person, I would like for a decline button that
               functions like a left swipe.
            </li>
            <li>
              As a hungry person, I would like for a right swipe to accept the
              restaurant and take to restaurant page.
            </li>
            <li>
              As a hungry person, I would like for an accept button that
              functions like a right swipe.
            </li>
            <li>
              As a hungry person, I would like to swipe up to see more
              information about the restaurant.
            </li>
            <li>
              As a hungry person, I would like for a like button that save
              restaurants I like to a list.
            </li>
            <li>As a hungry person, I would like to filter restaurants.</li>
          </ul>

          <ul className="py-6 text-lg text-black">
            Restaurant Card Page <br></br>
            <li>
              As a hungry person, I would like to see the restaurant phone
              number.
            </li>
            <li>
              As a hungry person, I would like a button that shows me the
              direction to the restaurant in goolge maps.
            </li>
            <li>
              As a hungry person, I would like a button that links to a third
              party food delivery serivice.
            </li>
          </ul>

          <ul className="py-6 text-lg text-black">
            Restaurant Information (Swipe up) <br></br>
            <li>
              As a hungry person, I would like to see the type of restaurant
              (ex:fine dining? fast food?).
            </li>
            <li>
              As a hungry person, I would like to see what kind of food is
              served.
            </li>
            <li>As a hungry person, I would like to see ongoing specials.</li>
            <li>
              As a hungry person, I would like to see reviews of the
              restauraunt.
            </li>
          </ul>

          <h2 className="text-5x1 font-bold">Admin</h2>
          <ul className="py-6 text-lg text-black">
            <li>As an admin, I would like to update restaurant information.</li>
            <li>
              As an admin, I would like to add or delete restaurants listed in
              the app.
            </li>
            <li>
              As an admin, I would like to see feedback of users on the app.
            </li>
            <li>
              As an admin, I would like to have the ability to ban users who
              misuse the app or break terms of service.
            </li>
            <li>
              As an admin, I would like to have a dashboard to manage the users.
            </li>
          </ul>

          <h2 className="text-5x1 font-bold">Tester</h2>
          <ul className="py-6 text-lg text-black">
            <li>
              As a tester, I would like for the login screen to have input
              validation.
            </li>
            <li>
              As a tester, I would like for there to be a limit to the number of
              password attemps until a cooldown timer happen.
            </li>
            <li>As a tester, I would like the option to login as guest.</li>
            <li>
              As a tester, I would like to have an algorithm to generate a new
              restaurant after swiping.
            </li>
            <li>
              As a tester, I would like to make the app take one input at a time
              (Ex: if you press filter you can not break the app by pressing the
              like button immediately after)
            </li>
            <li>
              As a tester, I would like each restaurant to be generated one
              time.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
