export default function UserpreferenceForm() {

  return (
    <>
      <form>
        <h2>User Preference</h2>

        <label>
          How often would you like to update your financial information?
        </label>
        <input required />
        <br />

        <label>Birthdate</label>
        <input required />
        <br />

        <label>Income</label>
        <input required />
        <br />
      </form>
    </>
  );
}

//* OLD CODE
{/* <form>
        <h2>User Preference</h2>

        <label>
          How often would you like to update your financial information?
        </label>
        <input required />
        <br />

        <label>Birthdate</label>
        <input required />
        <br />

        <label>Income</label>
        <input required />
        <br />
      </form> */}