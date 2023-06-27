import Image from "next/image";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { TfiTicket } from "react-icons/tfi"
import { AiFillAndroid, AiFillApple, AiOutlineHeart } from 'react-icons/ai'

export default function DownloadBanner() {
    return <div className="p-4 my-4 flex py-14 md:my-8 md:rounded-lg md:items-center justify-evenly bg-zinc-900">
        <div className="hidden md:block space-y-2 text-md text-gray-300">
            <Image
                alt="qr code"
                width="200"
                height="200"
                src="https://dice-media.imgix.net/attachments/2023-06-12/0b66080e-710b-48a2-8353-a262146050fe.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
            />
            <p className="text-center">Download the app</p>
        </div>
        <div >
            <h1 className="text-lg md:text-3xl mb-4 md:w-[400px]">More shows, based on your taste</h1>

            <div className="space-y-4 text-gray-300 text-sm md:text-md">
                <div className="flex items-center space-x-3">
                    <PiSpotifyLogoLight className="w-6 h-6" />
                    <span>Connect your Spotify or Apple Music.</span>
                </div>

                <div className="flex items-center space-x-3">
                    <TfiTicket className="w-6 h-6" />
                    <span>Send tickets and get refunds to sold-out shows.</span>
                </div>

                <div className="flex items-center space-x-3">
                    <AiOutlineHeart className="w-6 h-6" />
                    <span>Save events and invite your friends.</span>
                </div>
            </div>
            <div className="flex items-center mt-6 space-x-2 text-sm">
                <button className="flex items-center space-x-1 bg-zinc-800 py-2 px-4 rounded-full">
                    <AiFillApple className="w-5 h-5" />
                    <span>iOS</span>
                </button>
                <button className="flex items-center space-x-1 bg-zinc-800 py-2 px-4 rounded-full">
                    <AiFillAndroid className="w-5 h-5" />
                    <span>Android</span>
                </button>
            </div>
        </div>
        <div>
            <svg className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M62.53 0c9.638 0 14.456 0 19.644 1.64A20.389 20.389 0 0194.36 13.826C96 19.014 96 23.833 96 33.47v29.06c0 9.638 0 14.456-1.64 19.644a20.385 20.385 0 01-12.186 12.185C76.986 96 72.168 96 62.53 96H33.47c-9.638 0-14.456 0-19.644-1.64A20.385 20.385 0 011.64 82.173C0 76.986 0 72.168 0 62.53V33.47c0-9.637 0-14.456 1.64-19.644A20.389 20.389 0 0113.826 1.64C19.014 0 23.832 0 33.47 0h29.06z" fill="#fff"></path><g clipPath="url(#dice-app_svg__clip0_2176_5496)"><path d="M61.04 54.076c-.095.232-.296.391-.359.66a1.278 1.278 0 01-.438.672c-.211.174-.354.407-.464.66-.1.233-.28.407-.47.556-.132.11-.322.116-.422.317-.08.163-.233.311-.354.454-.427.481-.76 1.026-1.13 1.549-.216.312-.395.645-.617.957-.311.438-.602.898-.955 1.31-.095.111-.164.238-.238.36-.264.454-.617.846-.897 1.29-.211.338-.501.607-.77.872-.46.121-.819-.132-1.162-.339a4.662 4.662 0 00-.665-.343c-.216-.09-.358-.296-.617-.333-.153-.021-.285-.238-.438-.254-.206-.021-.285-.158-.396-.27a1.631 1.631 0 00-.47-.332c-.607-.286-1.155-.672-1.773-.936-.137-.058-.296-.084-.433-.17-.274-.158-.586-.248-.786-.517-.085-.111-.222-.153-.322-.19-.158-.059-.296-.164-.322-.275-.069-.249-.264-.317-.438-.413-.195-.105-.417-.174-.554-.364-.122-.175-.349.01-.496-.164-.048-.058-.238-.005-.264-.185-.006-.048-.085-.111-.143-.127-.174-.047-.269-.164-.332-.322-.053-.138-.153-.212-.306-.185-.19.031-.349-.048-.491-.148-.28-.206-.575-.386-.919-.45-.142-.026-.063-.158-.153-.211-.364-.206-.702-.465-1.103-.618-.232-.09-.427-.26-.644-.386-.717-.418-1.446-.825-2.116-1.311-.232-.17-.454-.338-.712-.47-.085-.048-.164 0-.248-.043-.016.153.153.28 0 .434-.159.158-.154.38-.143.592v.1c-.074 2.32.164 4.636.1 6.95 0 .085-.026.196.016.244.259.296.19.65.18.983-.016.444.216.883.095 1.316-.18.655-.127 1.327-.07 1.972.059.676.017 1.353.09 2.024.064.56.111 1.12.206 1.675.037.207.085.407.085.614-.005.211.164.39.1.613.217.46.232.972.364 1.453.095.344.2.703.227 1.063.01.153.148.253.111.412-.037.148.063.275.09.412a.877.877 0 00.2.423c.07.074.138.143.117.26-.011.047-.022.126 0 .147.263.2.153.555.306.777.237.354.316.83.77 1.041.116.053.259.164.222.355-.016.084.058.116.1.158.275.259.507.56.845.756.084.047.147.121.258.106.1-.016.227.084.243.11.216.35.596.297.908.381.755.201 1.514.407 2.164.83.332.217.691.439.923.825.153.253.364.496.576.724.459.486.77 1.073.992 1.696.074.207.047.466.016.698-.064.439-.111.872-.248 1.3-.09.275-.243.502-.454.603-.285.137-.565.312-.898.386-.374.084-.76.016-1.113.1-.528.127-1.045.058-1.568.085-.19.01-.38.005-.564-.09-.148-.08-.343.047-.518-.09-.084-.063-.258-.032-.39-.016-.143.016-.232-.09-.36-.116-.347-.085-.717-.085-1.044-.26-.106-.057-.259-.03-.39-.026-.539.016-1.061-.031-1.573-.2-.238.074-.433-.117-.66-.1-.248.015-.443-.191-.67-.191-.238 0-.454-.069-.66-.127a3.768 3.768 0 00-1.43-.18c-.175.016-.28-.153-.465-.116-.132.032-.3.063-.412-.09-.01-.016-.063-.005-.094 0-.512.027-.882-.216-1.146-.634-.063-.1-.163-.069-.237-.143-.47-.48-.787-1.015-.892-1.702-.042-.29-.127-.587-.069-.867.143-.724.005-1.458.111-2.172.08-.56-.005-1.126.1-1.67.085-.428.058-.846.08-1.269.005-.095.047-.206-.032-.285-.095-.095-.069-.153.005-.249.042-.052.016-.158.032-.237.042-.186-.174-.328-.1-.513.068-.17.116-.328.1-.513-.027-.28.148-.523.105-.814-.037-.28-.01-.57-.005-.856 0-.048.005-.106.032-.138.116-.121.105-.296.158-.438.058-.164.016-.365.016-.55v-2.416c0-.592.148-1.173.11-1.77-.036-.587-.005-1.174-.005-1.76 0-.154.058-.344-.015-.444-.1-.143.052-.254.005-.323-.106-.137-.09-.275-.09-.417 0-.132.005-.27 0-.402-.01-.153.074-.317.048-.444-.027-.153.1-.238.068-.391-.031-.143-.084-.328.069-.47.053-.048-.021-.117-.027-.17-.073-.528-.248-1.067-.132-1.596.064-.296.059-.581.08-.867.02-.264-.085-.512-.021-.793.036-.153-.132-.37-.074-.555a.426.426 0 00-.006-.322c-.195-.576-.11-1.174-.079-1.76.01-.185-.042-.35-.037-.529.021-.92.006-1.845.01-2.77 0-.644-.173-1.273-.1-1.918-.158-.328-.105-.677-.094-1.015.01-.407-.201-.645-.523-.856-.834-.54-1.7-1.03-2.491-1.639-.238-.18-.433-.396-.665-.576-.38-.301-.702-.676-1.124-.93-.042-.027-.074-.069-.106-.106-.549-.624-1.261-1.083-1.8-1.712-.316-.37-.749-.56-1.108-.862-.438-.37-.913-.687-1.388-1.01-.216-.148-.401-.333-.602-.496-.163-.138-.395-.19-.57-.318-.475-.348-1.023-.607-1.414-1.078-.053-.063-.169-.127-.164-.18.016-.184-.216-.2-.216-.37 0-.158.137-.248.158-.385.074-.44.401-.74.613-1.105.179-.312.38-.608.543-.93.08-.154.195-.291.285-.439.301-.492.544-1.015.834-1.512.27-.46.554-.914.855-1.358.232-.349.422-.703.433-1.131.005-.201.121-.38.221-.508.317-.422.523-.888.75-1.353.169-.343.364-.692.565-1.03.227-.381.57-.65.77-1.037.016-.026.048-.047.069-.073.169-.154.063-.444.343-.566.19-.085.206-.375.354-.55.147-.18.3-.38.39-.586.158-.37.412-.672.623-1 .068-.11.042-.237.121-.354.111-.163.174-.343.407-.348.058 0 .1-.022.126-.064.095-.148.17-.322.322-.417.148-.09.132-.339.349-.355.015-.385.374-.518.57-.771.068-.09.174-.143.163-.286-.01-.132.08-.206.211-.222.064-.01.122-.005.185-.042.169-.095.153-.349.38-.396.2-.043.311-.222.46-.35.22-.195.4-.417.659-.58.27-.17.401-.487.507-.788.026-.08.037-.164.105-.206.596-.365.955-.93 1.32-1.507.369-.587.733-1.168 1.06-1.776.29-.539.634-1.046.956-1.57.21-.348.459-.681.628-1.046.142-.312.29-.619.432-.93.217-.47.534-.862.86-1.253.085-.1.143-.211.217-.312.317-.412.644-.814.992-1.2.212-.227.412-.46.565-.724.074-.132.164-.248.296-.307.49-.21.897-.554 1.261-.92.612-.607 1.325-1.11 1.868-1.765.333-.09.602.016.882.159.385.196.786.375 1.16.592.085.048.175.074.238.148.306.338.681.576 1.114.708.153.048.185.249.333.265.174.02.237.095.306.253.037.08.2.185.3.206.45.111.692.555 1.135.661.069.016.148.1.174.175.17.407.576.607.808.972.158.249.49.391.76.56.607.386 1.214.772 1.852 1.116.227.121.407.322.597.486.443.38.907.719 1.377 1.057.222.159.422.36.623.544.338.312.718.577 1.045.904.28.28.628.492.95.73.57.417 1.15.83 1.794 1.13.275.329.66.519.993.767.601.455 1.166.983 1.873 1.29.28.122.417.391.692.518.438.2.823.507 1.245.745.74.412 1.504.798 2.154 1.348.395.333.807.629 1.224.925.169.122.354.206.533.301.433.228.75.592 1.145.857.433.29.85.607 1.304.861.327.18.617.397.892.634.686.598 1.43 1.116 2.206 1.586.354.217.697.444 1.003.73.222.206.433.422.638.64.365.37.797.655 1.22.945.2.138.311.386.57.439.052.211.28.349.227.613-.043.2-.022.386-.164.592-.243.354-.465.719-.76 1.041-.19.212-.317.476-.486.703-.147.201-.353.36-.443.613-.084.254-.327.402-.49.603-.201.248-.386.518-.555.777-.158.243-.443.391-.517.687-.39.344-.65.804-.903 1.237-.206.349-.496.618-.702.962-.095.158-.169.354-.348.465-.026.016-.069.048-.069.069-.026.507-.4.793-.712 1.115-.021.026-.074.053-.069.069.069.306-.248.364-.37.539-.126.18-.242.38-.406.539a.81.81 0 00-.258.55c-.016.211-.19.36-.312.523-.09.116-.2.196-.2.375 0 .122-.18.19-.2.365-.027.185-.122.391-.37.439-.206.042-.29.243-.375.39-.1.186-.258.36-.248.603.021.328-.227.54-.385.777-.148.212-.422.64-.407.894.027.401-.19.734-.253 1.11-.063.38-.08.745 0 1.115.016.074.053.148.048.227-.064 1.078.163 2.151.105 3.23-.02.417 0 .84-.005 1.258 0 .132.042.322-.026.386-.154.142.084.174.036.29-.042.117.011.27-.015.397-.053.253.132.46.116.713-.016.233-.106.497.09.714-.048.322.09.655-.074.978-.043.079-.027.19-.027.29-.005.286-.005.571 0 .857 0 .19-.031.39.1.56-.174.18-.084.407-.095.613-.015.2-.005.402-.005.603 0 .185-.042.385.01.55.059.174-.237.258-.052.443.105.106.042.286.037.434-.005.169.042.312.095.465a.317.317 0 01-.08.354c.127.08.122.222.08.312-.095.206.248.386.01.576.19.18.074.407.095.613.022.217.006.433.006.655v1.259c0 .216-.006.438 0 .655.005.11-.043.233.068.328.027.02.043.1.027.132-.164.328-.016.697-.111 1.015-.148.491-.032.983-.095 1.469-.026.206.132.354.116.566-.01.185-.1.401.09.56-.043.28.11.55.09.814-.048.634.221 1.147.559 1.633.1.143.195.29.3.433.386.53.692.81 1.336 1.121.27.132.565.17.844.27.438.153.877.311 1.299.512.67.317 1.356.608 2.037.91.449.2.844.496 1.22.808.263.222.553.402.786.666.66.74 1.287 1.501 1.683 2.426.206.481.127.968-.053 1.454-.11.301-.343.491-.58.645a1.046 1.046 0 01-.639.153c-.3-.026-.612.037-.902-.016-.74-.137-1.483-.08-2.222-.09-.755-.01-1.51.048-2.26-.02-.474-.043-.95-.033-1.414-.101-.306-.048-.606-.064-.913-.09-.28-.027-.538-.17-.818-.227-.216-.043-.454-.08-.66-.217-.174-.117-.427-.058-.612-.217-.142-.122-.359-.032-.554-.11a1.997 1.997 0 00-.601-.123c-.67-.031-1.304-.222-1.943-.407a2.074 2.074 0 01-.818-.465c-.18-.158-.237-.37-.258-.544-.048-.386-.17-.761-.127-1.163.037-.349-.005-.703.01-1.057.016-.412-.147-.798-.11-1.216.037-.401 0-.803.01-1.205.006-.158-.21-.301-.079-.45.116-.131-.169-.263.042-.353-.074-.143-.074-.296-.068-.45.005-.153-.021-.306.005-.449.037-.195-.1-.333-.121-.513-.016-.163.137-.29.026-.475-.106-.17.11-.354.095-.555a2.79 2.79 0 010-.555c.016-.132.174-.243.058-.397-.09-.121.069-.206.042-.338-.042-.217.048-.45-.084-.655.153-.095-.148-.238.042-.36.158-.1-.047-.243-.016-.37.006-.026.053-.058.053-.079-.032-.137-.153-.259-.095-.412.042-.117.005-.222.01-.317.038-.518-.168-1.01-.116-1.517.011-.127.011-.249-.09-.37-.047-.059-.03-.212.011-.286.048-.08.058-.106 0-.19-.047-.069-.058-.19.037-.264.095-.07-.137-.132.005-.222.09-.053.016-.138-.042-.207-.026-.026-.031-.11-.01-.132.105-.11.132-.216.031-.349-.068-.095.153-.195-.005-.322-.063-.053.143-.18-.01-.317-.07-.064-.032-.249-.032-.38 0-.572-.032-1.142.01-1.713.032-.465-.132-.904-.116-1.37.021-.47 0-.94.006-1.41 0-.307-.006-.608.09-.92.084-.29-.075-.618.105-.914.042-.075.005-.196.005-.297 0-.618.021-1.242-.016-1.86-.01-.148.18-.248.032-.434-.084-.1-.016-.322-.016-.491v-.502c0-.17-.016-.338.005-.502.011-.154-.052-.249-.179-.35zM40.678 32.955c-.095 0-.206-.032-.29.005-.575.243-1.24.211-1.763.597-.728.196-1.356.608-2.016.951a14.37 14.37 0 00-1.451.862c-.517.349-.892.497-1.557 1.21-.422.455-.723 1.058-1.367 1.28-.016.005-.026.02-.037.037-.29.333-.665.586-.897.983a.783.783 0 01-.407.333c-.454.174-.585.629-.818 1.004-.02.037-.01.042 0 .074.1.328.243.634.55.809.089.047.152.11.231.169.491.37.982.75 1.536 1.025.19.095.417.127.607.228.396.221.829.348 1.251.502.306.116.665.068.929.296.127.105.264.1.412.1.285 0 .575-.037.85.016.585.116 1.213.127 1.757-.08.422-.163.844-.295 1.309-.242.206.02.39-.164.612-.101.021.005.058-.021.08-.042.258-.185.59-.185.86-.35.28-.168.564-.311.88-.417.249-.084.46-.264.692-.39.575-.307 1.166-.587 1.731-.915.46-.264.797-.682 1.172-1.052.026-.127-.032-.254.069-.38.2-.265.19-.614.116-.894-.064-.227-.016-.46-.09-.666-.085-.227-.1-.444-.085-.666.037-.465-.153-.867-.3-1.284-.043-.117-.1-.1-.196-.064.032.053.085.095.09.148.074.487-.116.925-.354 1.306a3.7 3.7 0 01-.548.682c-.28.27-.507.581-.713.909a.49.49 0 01-.185.153c-.485.275-.97.56-1.504.735-.19.063-.375.254-.57.137-.132-.08-.248-.069-.375-.069-.485-.005-.97.011-1.456-.005-.327-.01-.634.069-.94.164-.174.053-.327.032-.512-.016-.332-.09-.533-.338-.791-.512-.37-.254-.55-.672-.787-1.02-.042-.106.111-.122.095-.217-.068-.365.074-.709.111-1.063.032-.36.1-.724.206-1.073.063-.2.185-.396.28-.586.232-.47.353-.656.733-.91.264-.174.576-.322.766-.56.274-.338.665-.45 1.008-.629.332-.174.728-.28 1.076-.512zm18.277-4.747c-.348.148-.696.301-1.05.45-.142.057-.274.131-.428.179-.337.1-.69.227-.97.433-.613.455-1.178.962-1.763 1.449-.164.137-.306.296-.47.433-.164.137-.296.328-.449.486-.153.154-.338.291-.454.465-.184.286-.443.503-.622.793-.153.243-.338.46-.38.75-.048.34-.365.477-.518.74-.4.683-.654.905-1.451 1.497-.074.053-.106.164-.158.232-.18.238-.032.487-.095.709.184.185.348.37.622.359.37-.01.718.116 1.077.185.232.042.46.122.707.132.248.01.502.111.76.085.143.227.396.031.591.158.185.122.454.016.681.042.544.064 1.077-.068 1.615-.121.438-.042.866-.233 1.325-.185.164-.17.375-.106.56-.095.205.016.358-.132.559-.111.375.037.723-.08 1.071-.19.095-.032.17-.09.254-.117.19-.058.274-.264.48-.296.343-.058.686-.11 1.019-.206.248-.074.506-.137.723-.317.29-.233.649-.349 1.002-.486.803-.312.803-.127 1.34-.761.033-.037.064-.085.106-.106.475-.211.803-.608 1.156-.962.37-.365.38-.581.243-1.131-.095-.391-.317-.709-.475-1.063-.164-.364-.449-.65-.675-.978-.048-.073-.111-.18-.275-.09.021.207-.069.418-.084.63-.037.412-.111.787-.412 1.088.01.27-.253.265-.39.376a7.228 7.228 0 01-1.046.745c-.765.439-1.625.682-2.406 1.094a1.48 1.48 0 01-.692.154 9.2 9.2 0 00-.855 0c-.28.02-.522-.18-.812-.09-.132-.28-.402-.36-.64-.402-.237-.042-.437-.175-.654-.248-.258-.085-.348-.407-.343-.693.011-.544.138-1.073.264-1.601a.534.534 0 00.027-.238c-.058-.386.153-.656.396-.894.168-.163.322-.354.395-.544.196-.486.602-.782.96-1.1.238-.18.439-.385.634-.639z" fill="#000"></path><path d="M40.678 32.955c-.348.232-.75.338-1.097.523-.344.18-.734.29-1.009.629-.19.238-.5.38-.765.56-.385.254-.501.439-.733.91-.095.195-.217.385-.28.586a5.582 5.582 0 00-.206 1.073c-.032.354-.18.698-.11 1.062.015.09-.138.106-.096.217.243.349.417.766.787 1.02.258.18.464.423.791.513.185.047.338.069.512.016.306-.096.607-.175.94-.164.485.016.97 0 1.456.005.127 0 .243-.01.375.069.195.116.385-.08.57-.138.533-.174 1.019-.46 1.504-.734a.49.49 0 00.185-.154c.206-.327.433-.64.712-.909.212-.206.407-.444.55-.682.237-.385.427-.819.353-1.305-.005-.053-.058-.095-.09-.148.1-.042.159-.058.195.063.148.418.338.82.301 1.285-.016.222 0 .444.085.666.079.2.026.433.09.666.079.28.09.623-.117.893-.095.127-.042.254-.068.38-.375.365-.707.788-1.172 1.052-.565.323-1.156.608-1.731.915-.232.127-.443.306-.691.39a4.808 4.808 0 00-.882.419c-.269.163-.601.163-.86.348-.026.016-.058.048-.08.043-.22-.064-.406.121-.611.1-.465-.047-.882.085-1.31.243-.543.206-1.171.196-1.757.08-.274-.053-.564-.016-.85-.016-.147 0-.285.005-.411-.1-.264-.228-.623-.186-.93-.297-.421-.158-.849-.285-1.25-.502-.19-.106-.417-.132-.607-.227-.554-.28-1.045-.656-1.536-1.026-.074-.058-.142-.116-.232-.169-.306-.174-.449-.48-.549-.809-.01-.037-.02-.037 0-.074.227-.37.364-.83.818-1.004a.787.787 0 00.407-.333c.232-.396.607-.65.897-.983.01-.01.021-.032.037-.037.644-.227.94-.824 1.367-1.279.66-.708 1.034-.856 1.557-1.21.47-.318.96-.603 1.451-.862.654-.343 1.288-.75 2.016-.951.523-.392 1.188-.354 1.763-.598.105-.047.216-.015.311-.015zM58.955 28.208c-.19.248-.396.46-.622.655-.36.318-.766.614-.961 1.1-.074.19-.232.38-.396.544-.243.238-.454.508-.396.893.01.075-.01.154-.026.238-.132.524-.259 1.058-.264 1.602-.005.28.084.602.343.692.222.074.417.206.654.249.238.042.507.121.64.402.29-.09.532.11.812.09.285-.022.57-.011.855 0 .243.01.496-.048.691-.154.781-.417 1.642-.655 2.407-1.094.37-.211.712-.476 1.045-.745.137-.111.401-.111.39-.376.301-.3.375-.682.412-1.089.021-.21.106-.428.085-.628.158-.09.221.015.274.09.227.327.512.607.676.977.158.354.374.671.475 1.063.137.55.126.766-.243 1.13-.36.355-.681.751-1.156.963-.042.02-.074.069-.106.105-.538.635-.538.45-1.34.762-.348.137-.707.253-1.003.486-.222.18-.475.243-.723.317-.332.095-.675.148-1.019.206-.205.032-.29.238-.48.296-.084.027-.158.085-.253.116-.354.111-.702.228-1.072.19-.2-.02-.358.128-.559.112-.185-.016-.396-.074-.56.095-.459-.048-.88.143-1.324.185-.533.053-1.066.185-1.615.121-.227-.026-.496.08-.681-.042-.195-.127-.449.064-.591-.158-.264.026-.512-.074-.76-.085-.248-.01-.475-.09-.707-.132-.36-.069-.702-.196-1.077-.185-.274.005-.438-.175-.623-.36.064-.222-.084-.47.095-.708.048-.069.085-.174.159-.232.802-.592 1.055-.81 1.45-1.496.154-.264.47-.402.518-.74.042-.286.227-.508.38-.75.18-.291.438-.508.623-.794.116-.18.3-.311.454-.465.153-.158.285-.349.448-.486.164-.137.307-.296.47-.433.586-.487 1.156-.994 1.763-1.449.28-.206.633-.333.971-.433.153-.048.285-.122.428-.18.337-.158.686-.312 1.04-.465z" fill="#FEFEFE"></path></g><defs><clipPath id="dice-app_svg__clip0_2176_5496"><path fill="#fff" transform="translate(20 9)" d="M0 0h57v78H0z"></path></clipPath></defs></svg>
        </div>
    </div>
}