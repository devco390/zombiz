const CalltoAction = () => {
    return (
        <div className="call-to-actions">
            <a className="call-to-action" href="#">
                <div className="call-to-action__circle call-to-action__call">
                    <i className="icon icon-phone"></i>
                </div>
                <p>313 472 69 63</p>
            </a>
            <a className="call-to-action" href="#">
                <div className="call-to-action__circle call-to-action__whatsapp">
                    <i className="icon icon-whatsapp"></i>
                </div>
                <p>Atención en Línea</p>
            </a>
        </div>
    )
}

export default CalltoAction;