'use client'

import { useEffect, useState } from "react"

import Lenis from 'lenis'


export default function Section() {

    const [lenisRef, setLenis] = useState(null);

    const [rafState, setRaf] = useState(null);
    useEffect(() => {
        const scroller = new Lenis();
        let rf;
        
        function raf(time) {
            scroller.raf(time)
            requestAnimationFrame(raf)
        }
        rf = requestAnimationFrame(raf)
        setRaf(rf);
        setLenis(scroller)

        return () => {
            if (lenisRef) {

            
            cancelAnimationFrame(rafState)
            lenisRef.destroy()
             }
        }
    }, [])
    return (
    
    <section>
        <span>
        
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime veniam temporibus, esse nulla expedita dolorum maiores asperiores, minus iure ex eaque facilis magnam voluptatibus provident totam neque perspiciatis sapiente accusantium.
            Magnam consequuntur nisi atque laudantium molestias consequatur qui dolorum accusamus ullam quibusdam placeat molestiae numquam, delectus doloremque. Dignissimos sunt reiciendis porro nulla ea recusandae maiores? Sint illo maiores facere quam!
            Totam modi, reprehenderit fugiat, eum ea atque laudantium, et ducimus tempora odio voluptates dicta eos aspernatur voluptate. Laborum soluta odit vero. Ducimus dolores, eaque unde omnis repellendus modi pariatur a!
            Nobis minus quam sunt, ut perspiciatis debitis repellendus fuga veritatis vel quasi doloremque aspernatur error harum, aut accusantium esse eum reprehenderit dicta tempore. At reprehenderit obcaecati, amet unde aperiam possimus.
            Reiciendis repudiandae deleniti voluptas incidunt fugiat doloremque enim, ab minima cum adipisci accusantium iste quo corrupti rem. Illum aperiam harum quia blanditiis libero, culpa, vitae temporibus nihil alias assumenda amet!
            Commodi eveniet nemo, quos itaque enim ipsum assumenda qui dolorem odit vel facere, corporis illum optio at. Veritatis itaque quo, vitae dolorem dolores deserunt expedita iure incidunt illo deleniti sequi?
            Perferendis vero veniam, aspernatur iusto sint quia nesciunt doloribus nam modi consectetur eum, laboriosam tenetur earum, quisquam id minus! Nihil a cupiditate, veniam neque corrupti quos quaerat vitae ducimus quasi.
            Adipisci facilis error sint nulla nobis asperiores assumenda! Ipsum, aliquid eveniet! Temporibus unde mollitia veritatis adipisci quaerat tempora eaque praesentium quia voluptates. Culpa doloribus nam rerum rem nesciunt cum omnis!
            Nam molestias iste veniam, amet quaerat iusto, tempora est tempore neque aliquam eius! Minima laborum libero repudiandae, porro temporibus aspernatur corporis explicabo sint suscipit blanditiis eveniet adipisci quidem quos dolorem?
            Ipsam ex omnis corrupti odio vel eaque magnam consequatur iusto. Qui aspernatur architecto a iste quos debitis quisquam, sunt fuga, officia optio adipisci ipsam modi et tempore itaque, sit distinctio.
            Fugiat dignissimos, rem atque distinctio perferendis sunt fugit molestias maxime explicabo. Earum qui fugiat libero possimus corporis accusamus omnis nemo, consequuntur iste pariatur nam, provident incidunt cupiditate harum id quia?
            Perspiciatis, recusandae architecto velit nihil voluptatum totam rem reprehenderit iste id, molestias itaque iure explicabo! Eum, esse eos sint consequuntur facilis cupiditate veniam asperiores magnam. Qui non harum quae modi?
            Perspiciatis laborum ut facilis, ipsum reiciendis, quos iusto sunt voluptatibus odio itaque eum consectetur nemo temporibus nesciunt ad et natus quod explicabo, totam ducimus ea libero. Perspiciatis amet tempore laborum?
            Consequuntur temporibus, ipsa quidem iure aliquam aliquid eos mollitia reiciendis! Similique dolor sint alias soluta, eligendi nemo earum debitis perspiciatis repellat ea, sequi cumque inventore, ullam aspernatur autem doloribus? Vel!
            Animi dolores perferendis, incidunt asperiores quasi distinctio quisquam similique velit dolorem temporibus, ipsum fugiat quos fugit officia, corrupti ex eum laborum dolore tenetur maxime exercitationem? Iste vel quos unde fugiat!
            Atque vel officia esse temporibus vitae unde quod enim ipsa quasi, quaerat explicabo reprehenderit quisquam animi illum assumenda cum neque error amet. Nam quisquam error ullam laboriosam debitis nesciunt tempora?
            Aspernatur doloremque ullam deleniti minima, ipsum esse velit doloribus, consequuntur fugiat perspiciatis cupiditate in sapiente nostrum iure. Assumenda nostrum ducimus et tempora quaerat temporibus doloribus iste, quisquam corrupti quidem porro?
            Aut perspiciatis quaerat veritatis. Quasi cum perspiciatis atque quisquam facere nostrum maiores, eum debitis temporibus magnam! Reprehenderit dolor reiciendis deleniti earum distinctio quia explicabo architecto iste maxime, pariatur odit quis?
            Cum hic molestias ut, reprehenderit, ex ipsam blanditiis dolor sunt repudiandae impedit voluptatum corrupti similique, esse ducimus? Aliquam fugiat veniam autem, reprehenderit sapiente sint aperiam esse necessitatibus ratione consectetur. Rem.
            Ea debitis doloremque pariatur possimus qui veniam! Velit repellat ipsa cupiditate eligendi molestias ea quas in? Ab repellendus maiores iste ipsa possimus, voluptas non architecto in reiciendis atque dolores officiis.
            Fugit laborum sed reprehenderit voluptates quaerat nemo illum iste autem distinctio suscipit, aperiam officia sunt molestiae animi ad earum aspernatur dolorem facilis laboriosam ipsa optio illo, corrupti officiis! Aliquam, optio?
            Deleniti facere culpa, minima commodi doloremque, exercitationem velit nisi deserunt fugiat dolorum veniam omnis possimus et quam id. Enim, unde voluptatibus hic rerum nobis officia quas velit deserunt laudantium commodi!
            Dignissimos, expedita? Iure id exercitationem veritatis, vero impedit eos qui ratione maxime pariatur vel accusantium esse unde inventore tempore quibusdam nam deserunt quae at aliquam explicabo natus! Culpa, magni dolorem.
            Debitis quisquam distinctio, quidem ut provident id, asperiores delectus saepe fugiat aliquid magnam excepturi corrupti libero. Architecto laboriosam dicta delectus, nesciunt ullam distinctio dolores, doloremque eos, earum soluta culpa quisquam!
            Natus provident vel assumenda quisquam cumque quod explicabo blanditiis sint porro? Quam, magnam voluptate impedit odit veritatis nesciunt et cum tempore minima suscipit necessitatibus, ipsam maiores earum cumque assumenda fugit!
            Architecto voluptatibus saepe doloremque unde incidunt recusandae, maxime totam quis dolores et alias labore est eius, distinctio, facere voluptate perspiciatis molestias iste harum laboriosam consectetur laudantium mollitia quibusdam minus? Deleniti.
            Numquam mollitia sequi cupiditate aut neque laudantium ut dolores ad quibusdam consectetur ducimus esse, expedita delectus ipsam dolor perspiciatis officia ex alias commodi totam libero nulla repudiandae! Soluta, non consequuntur.
            Praesentium totam odit ipsam voluptates architecto optio consequatur, libero similique labore illo molestiae ipsum maiores impedit mollitia reprehenderit placeat quae accusantium voluptatem? Odit, omnis officia unde distinctio repudiandae explicabo itaque?
            Ut quo ex perferendis consectetur voluptas laudantium suscipit eum impedit distinctio dignissimos ratione accusantium nobis adipisci excepturi debitis quod tempore sint unde, dolor, fugit cum provident inventore cumque! Cumque, porro!
            Minima fugiat ea quas cupiditate praesentium aut, architecto nihil delectus similique, nemo illo dolorum, in tenetur blanditiis iste vitae cumque repudiandae. Doloremque quidem et iste a saepe ea quasi hic.
            Dicta, laudantium quos quisquam hic temporibus voluptatum veniam? Adipisci reiciendis, quisquam rerum in molestiae iste, corporis non repellat ut quis eveniet mollitia? Officia libero ipsum blanditiis quis nulla fuga odit.
            Pariatur corrupti ea enim fugit harum natus. Dignissimos, expedita hic eveniet quas error vel saepe! Temporibus eos voluptatum beatae, recusandae porro minus? Iusto possimus maiores dolorum dicta ut ea voluptate.
            Cum rem veritatis quis, officiis magni, natus, repellendus earum dolorum perferendis eveniet consequatur dignissimos voluptas quos! Unde vitae, omnis cupiditate praesentium odio, quae voluptatem officiis at adipisci natus corrupti corporis?
            Ducimus provident natus laborum adipisci perferendis? Corrupti id natus libero fugiat, soluta repellat beatae officiis explicabo quasi sit eum quia veniam quibusdam alias perspiciatis! Molestias aspernatur eum esse fuga maxime!
            Minus quidem placeat ipsa, voluptate odio explicabo officia recusandae odit sapiente, perferendis error quaerat culpa aperiam praesentium illum. Nulla libero harum quaerat totam quis omnis. Reiciendis aperiam similique commodi facere!
            A, quam laudantium! Minus ad magni, doloremque quasi ratione obcaecati officiis distinctio perferendis, corporis deserunt ut incidunt fugit odio. Molestias aut perferendis deleniti debitis voluptate quisquam, quaerat rerum quo illo?
            Molestias illum eligendi accusamus expedita officiis consectetur, saepe quisquam suscipit rem excepturi voluptas modi ducimus ratione recusandae perferendis dignissimos temporibus? Labore sed hic unde nesciunt et voluptate optio sapiente quisquam.
            Velit, molestias quidem, praesentium, laboriosam harum rerum est asperiores id facilis ea et a obcaecati ullam aperiam dolore delectus consectetur eius dignissimos eum itaque error debitis ex natus! Id, fugit.
            Quam recusandae sint minima dolores qui. Non laborum repudiandae est! Inventore, non? Magnam numquam modi tempora, possimus accusamus voluptates aliquid illo deserunt inventore suscipit consequuntur voluptatem. Ullam doloremque fugiat placeat!
            Soluta saepe molestias tempora quia ut, deleniti non earum porro eveniet corrupti sapiente optio dolore! Soluta numquam nostrum, harum, accusamus cumque amet assumenda aut sequi incidunt reiciendis aliquid odio hic!
            Non perspiciatis tenetur voluptatum iste aliquam dolorem totam nam culpa odit, porro, nemo excepturi, deleniti fuga. Pariatur, rem excepturi autem nobis corrupti sunt voluptate dolorum, tempore, sequi eveniet nam reprehenderit!
            Mollitia non doloribus quod distinctio maiores dignissimos quam, excepturi blanditiis tenetur aut, et molestias accusamus perferendis quisquam! Recusandae eius ipsa nulla aut quaerat molestiae cupiditate ab quidem iste! Voluptatibus, quasi!
            Error corrupti officia rem perferendis accusantium blanditiis vel natus maxime. Nisi esse doloremque quam nemo quia? Dolore debitis deserunt dicta, nisi amet iusto saepe deleniti hic harum laudantium dolor incidunt.
            Minus quisquam quam autem dolorum saepe iste quidem aut soluta non est, ipsam a eos odit sequi perferendis itaque culpa aperiam. Doloremque aperiam quaerat quibusdam esse corporis. In, cupiditate consequuntur.
            Perspiciatis molestias fugiat recusandae quidem accusamus officia, quos sapiente numquam, unde at illum vero nisi est, quibusdam itaque nulla qui delectus perferendis iure repellendus molestiae. Officia quia adipisci sequi? Expedita!
            Animi nostrum repudiandae, possimus natus repellat nisi ea dicta placeat, earum facilis facere esse veniam hic. Ipsum suscipit consequatur, dolores et, inventore beatae fuga at eaque molestiae quos eveniet? Quam!
            Obcaecati quis repellat facere maxime consectetur ipsum id cupiditate asperiores in assumenda sit aliquid consequatur autem aliquam, quaerat quam amet? Optio vero omnis a nemo temporibus non ex, inventore ullam.
            Beatae incidunt tempore voluptates voluptas? Optio, culpa sed, iusto asperiores minus cupiditate quidem qui ratione quos laboriosam dolorum unde? Reprehenderit cumque at fuga consequatur qui est dolor unde a vel.
            Saepe incidunt explicabo nihil et molestiae vero veritatis molestias quos distinctio consequuntur perferendis optio, soluta eaque neque, tenetur, reiciendis itaque deleniti placeat magni sed voluptate harum possimus quam. Incidunt, veritatis?
            Optio nostrum ipsa molestias consequatur fugiat! Odio numquam cum quia, recusandae sunt aut, possimus eveniet quos at voluptate nostrum fuga ex similique? Dolore, ipsa officiis harum hic quis cupiditate corrupti?    
        </span>
    </section>
    )

}
