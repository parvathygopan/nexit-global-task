import Image from "next/image";
import random from "../../../../public/Assets/OIP.jpg";

export default function AnniversarySection() {
    
    return (
        <section className="colored pt-100">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Image
                            src={random}
                            alt="Office"
                            width={600}
                            height={420}
                            priority
                            className="m-3 p-3"
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <p className="pt-100">Celebrating</p>

                        <h2>
                            <span><b>21 Years</b></span>
                            
                            <span> of Excellence</span>
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros
                            aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                        </p>

                    </div>
                </div>


            </div>
        </section>
    );
}
