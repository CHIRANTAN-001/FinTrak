import * as React from "react"
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg"

function SplashScreenSvg(props) {
    return (
        <Svg
            width={428}
            height={1000}
            viewBox="0 0 428 926"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#F6F6F6" d="M0 0H428V926H0z" />
            <G clipPath="url(#clip0_19_23)">
                <Path
                    d="M244.769 413h-61.538C172.61 413 164 421.61 164 432.231v61.538C164 504.39 172.61 513 183.231 513h61.538C255.39 513 264 504.39 264 493.769v-61.538C264 421.61 255.39 413 244.769 413z"
                    fill="#151515"
                />
                <Path
                    d="M236.115 444.635h-28.076a5.096 5.096 0 100 10.192h28.076a5.097 5.097 0 100-10.192z"
                    fill="#FFFA87"
                    stroke="#000"
                    strokeWidth={0.5}
                />
                <Path
                    d="M237.653 442h-28.076a5.039 5.039 0 100 10.077h28.076a5.039 5.039 0 100-10.077z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth={0.8}
                />
                <Path
                    d="M226.5 460.019h-28.077a5.097 5.097 0 000 10.193H226.5a5.096 5.096 0 000-10.193z"
                    fill="#FFFA87"
                    stroke="#000"
                    strokeWidth={0.5}
                />
                <Path
                    d="M228.038 457.385h-28.077a5.038 5.038 0 100 10.077h28.077a5.039 5.039 0 100-10.077z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth={0.8}
                />
                <Path
                    d="M195.442 479.731a5.095 5.095 0 10-10.192 0 5.097 5.097 0 0010.192 0z"
                    fill="#FFFA87"
                    stroke="#000"
                    strokeWidth={0.5}
                />
                <Path
                    d="M196.923 477.808a5.039 5.039 0 10-10.078 0 5.039 5.039 0 0010.078 0z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth={0.8}
                />
            </G>
            <Path
                d="M188.528 541H186.8v-10.72h8.528v1.552h-6.8v3.328h6.56v1.536h-6.56V541zm9.813-8.88h-1.728v-1.84h1.728v1.84zm0 8.88h-1.728v-7.952h1.728V541zm3.328 0h-1.728v-7.952h1.584v2.464h.112c.24-1.344 1.296-2.624 3.312-2.624 2.208 0 3.296 1.488 3.296 3.328V541h-1.728v-4.32c0-1.488-.672-2.24-2.32-2.24-1.744 0-2.528.896-2.528 2.624V541zM215 541h-1.824c-1.712 0-2.768-.752-2.768-2.688v-3.824h-1.344v-1.44h1.344v-1.744h1.712v1.744H215v1.44h-2.88v3.728c0 .976.448 1.232 1.44 1.232H215V541zm2.809 0h-1.728v-7.952h1.584v2.144h.112c.24-1.28 1.104-2.304 2.736-2.304 1.808 0 2.592 1.296 2.592 2.8v1.04h-1.712v-.704c0-1.136-.48-1.664-1.664-1.664-1.36 0-1.92.752-1.92 2.176V541zm8.718.16c-1.648 0-2.688-.768-2.688-2.08 0-1.232.992-1.872 2.56-2.048l3.616-.384v-.464c0-1.312-.576-1.776-2.096-1.776-1.472 0-2.192.48-2.192 1.648v.064h-1.712v-.064c0-1.808 1.504-3.168 4.032-3.168s3.664 1.376 3.664 3.28V541h-1.584v-1.984h-.112c-.416 1.344-1.68 2.144-3.488 2.144zm-.96-2.192c0 .64.432.944 1.424.944 1.808 0 3.024-.672 3.024-2.24l-3.12.352c-.896.112-1.328.32-1.328.944zm9.414 2.032h-1.728v-10.72h1.728v5.92h2.272l2.384-3.152h2.016l-2.992 3.824 2.976 4.128h-2.032l-2.352-3.248h-2.272V541z"
                fill="#000"
            />
            <Rect x={45} y={35} width={100} height={109} rx={24} fill="#D9D9D9" />
            <Rect x={286} y={761} width={100} height={109} rx={37} fill="#D9D9D9" />
            <Rect x={45} y={635} width={50} height={50} rx={15} fill="#D9D9D9" />
            <Rect x={264} y={284} width={50} height={50} rx={15} fill="#D9D9D9" />
            <Defs>
                <ClipPath id="clip0_19_23">
                    <Path
                        fill="#fff"
                        transform="translate(164 413)"
                        d="M0 0H100V100H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SplashScreenSvg
