import { Header } from "./header";
import { Header2 } from "./header-2";

function App2() {
  return (
    <div className="flex flex-col max-w-[1400px] mx-auto w-full h-screen">
      <Header />
      <Header2 title="About us" description="About us" />
      <div className="p-8 flex flex-col">
        <div className=" flex space-x-12  ">
          <img className="h-[500px] w-[50%]" src="2p1.png" alt="" />
          <div className="space-y-4">
            <div className=" text-blue-400 text-[40px]">WHO WE ARE --</div>
            <div className=" text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores quia ex voluptas soluta dignissimos minus dolorem
              provident nulla perferendis. Alias libero dolor soluta culpa
              commodi possimus delectus distinctio assumenda, totam officiis
              hic? Quo quae ipsa id consectetur ab expedita reprehenderit dolore
              enim laudantium facere, hic odit corporis unde iste aspernatur
              nesciunt obcaecati tenetur dolores commodi explicabo. Hic,
              quisquam nihil sit molestias exercitationem repellendus
              consequuntur optio officiis, doloribus a et commodi! Numquam totam
              fuga eligendi accusantium blanditiis esse ipsum! Omnis minus
              voluptatibus adipisci quas eaque nulla molestiae voluptates vitae
              quos, aspernatur a iste sapiente sint, et repellat quisquam
              laudantium architecto ut! Cum maxime ad autem voluptate tenetur
              nihil, odit quidem voluptatibus alias iure suscipit doloribus
              atque.
            </div>
          </div>
        </div>
        {/* <div className="flex"> */}
        <div className=" flex space-x-12  ">
          <div className="space-y-4">
            <div className=" text-blue-400 text-[40px]">WHO WE ARE --</div>
            <div className=" text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores quia ex voluptas soluta dignissimos minus dolorem
              provident nulla perferendis. Alias libero dolor soluta culpa
              commodi possimus delectus distinctio assumenda, totam officiis
              hic? Quo quae ipsa id consectetur ab expedita reprehenderit dolore
              enim laudantium facere, hic odit corporis unde iste aspernatur
              nesciunt obcaecati tenetur dolores commodi explicabo. Hic,
              quisquam nihil sit molestias exercitationem repellendus
              consequuntur optio officiis, doloribus a et commodi! Numquam totam
              fuga eligendi accusantium blanditiis esse ipsum! Omnis minus
              voluptatibus adipisci quas eaque nulla molestiae voluptates vitae
              quos, aspernatur a iste sapiente sint, et repellat quisquam
              laudantium architecto ut! Cum maxime ad autem voluptate tenetur
              nihil, odit quidem voluptatibus alias iure suscipit doloribus
              atque.
            </div>
            <div className=" space-y-4">
              <div className=" text-blue-400 text-[40px]">WHO WE ARE --</div>
              <div className=" text-[20px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quia ex voluptas soluta dignissimos minus dolorem
                provident nulla perferendis. Alias libero dolor soluta culpa
                commodi possimus delectus distinctio assumenda, totam officiis
                hic? Quo quae ipsa id consectetur ab expedita reprehenderit
                dolore enim laudantium facere, hic odit corporis unde iste
                aspernatur nesciunt obcaecati tenetur dolores commodi explicabo.
                Hic, quisquam nihil sit molestias exercitationem repellendus
                consequuntur optio officiis, doloribus a et commodi! Numquam
                totam fuga eligendi accusantium blanditiis esse ipsum! Omnis
                minus voluptatibus adipisci quas eaque nulla molestiae
                voluptates vitae quos, aspernatur a iste sapiente sint, et
                repellat quisquam laudantium architecto ut! Cum maxime ad autem
                voluptate tenetur nihil, odit quidem voluptatibus alias iure
                suscipit doloribus atque.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default App2;
