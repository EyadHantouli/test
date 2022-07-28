const LinkBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('.lds-ring').classList.add('loading-show')
    }

    return (
        <div className="">
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input id="link-input" type='text' required placeholder="Insert Text Here..." />
                <ul id="link-submit">
                    <li><input id="link-submit" type='submit' /></li>
                    <li onClick={() => {
                        document.querySelector('.lds-ring').classList.remove('loading-show');
                    }}><div id="link-submit" className="lds-ring"><div></div><div></div><div></div><div></div></div></li>
                </ul>
            </form>
        </div>
    )
};

export default LinkBar;