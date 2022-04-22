import { moneyFormat } from '../helpers'

function Header({ total, money }) {
    return (
        <>
            <div>
                {total > 0 && money - total !== 0 && (
                    <div className="header">
                        <h1>
                        <p>TOKGÖZ MARKET</p> 
                        Harcayacak <span>{moneyFormat(money - total)}TL</span> paranız kaldı!
                        </h1>
                        </div>
                )}
                {total === 0 && (
                    <div className="header">Harcamak için <span>{moneyFormat(money)}TL</span> paranız var!</div>
                )}
                {money - total === 0 && (
                    <div className="header empty">Paran bitti, parasız insan boş insandır!</div>
                )}
                <style jsx>{`
                .header{
                  position: sticky;
                  top:0;
                  background: linear-gradient(to bottom, red , white);
                  height: 80px;
                  display: flex;
                  align-items=: center;
                  justify-content: center;
                  color: black;
                  font-size:15px;
                  letter-spacing: 2px;}

                  .header.empty {
                    background: linear-gradient(to bottom, #b82020, #be1414);
                  }


                  .header span {
                      margin: 0 5px;
                      font-weight: bold;
                  }
                  .header h1 p {
                    display: flex;
                    align-items=: center;
                    justify-content: center;
                    color: white;
                  }
              `}

                </style>

            </div>
        </>
    )
}
export default Header