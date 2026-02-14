import React, { FC } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderGenerique from "../../components/HeaderGenerique";

const MentionsLegales: FC = () => {
    const Title = ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-red-600 text-xl font-semibold mt-10 mb-4">
            {children}
        </h2>
    );

    const PageTitle = ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-[#017F7F] text-3xl font-semibold mt-10 mb-4">
            {children}
        </h1>
    );

    const P = ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4 text-gray-700 leading-relaxed">
            {children}
        </p>
    );

    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 py-16">

                <PageTitle>Mentions Légales</PageTitle>
                <Title>1. Présentation du site</Title>
                <P>
                    En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
                    confiance dans l'économie numérique, il est précisé aux utilisateurs
                    du site temci-climatisation.fr l'identité des différents intervenants
                    dans le cadre de sa réalisation et de son suivi :
                </P>
                <P>
                    <strong>Propriétaire :</strong> T.E.M.C.I – 1 Rue du 19 Mars 1962,
                    91150 Morigny-Champigny<br />
                    <strong>N° Siret :</strong> 43778470500018<br />
                    <strong>Capital social :</strong> 150 000,00 €<br />
                    <strong>N° de TVA intracommunautaire :</strong> FR26437784705<br />
                    <strong>Responsable publication :</strong> T.E.M.C.I – sarl.temci@orange.fr<br />
                    <strong>Hébergeur :</strong> OVH – 2 rue Kellermann – 59100 Roubaix – France<br />
                    <strong>Localisation du serveur d’hébergement :</strong> France
                </P>

                <Title>2. Conditions générales d’utilisation du site et des services proposés</Title>
                <P>
                    L’utilisation du site temci-climatisation.fr implique l’acceptation
                    pleine et entière des conditions générales d’utilisation ci-après
                    décrites. Ces conditions d’utilisation sont susceptibles d’être
                    modifiées ou complétées à tout moment, les utilisateurs du site
                    temci-climatisation.fr sont donc invités à les consulter de manière
                    régulière.
                </P>
                <P>
                    Ce site est normalement accessible à tout moment aux utilisateurs.
                    Une interruption pour raison de maintenance technique peut être
                    toutefois décidée par T.E.M.C.I, qui s’efforcera alors de communiquer
                    préalablement aux utilisateurs les dates et heures de l’intervention.
                </P>
                <P>
                    Le site temci-climatisation.fr est mis à jour régulièrement par
                    T.E.M.C.I. De la même façon, les mentions légales peuvent être
                    modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur
                    qui est invité à s’y référer le plus souvent possible afin d’en
                    prendre connaissance.
                </P>

                <Title>3. Description des services fournis</Title>
                <P>
                    Le site temci-climatisation.fr a pour objet de fournir une information
                    concernant l’ensemble des activités de la société.
                </P>
                <P>
                    T.E.M.C.I s’efforce de fournir sur le site temci-climatisation.fr des
                    informations aussi précises que possible. Toutefois, il ne pourra
                    être tenue responsable des omissions, des inexactitudes et des
                    carences dans la mise à jour, qu’elles soient de son fait ou du fait
                    des tiers partenaires qui lui fournissent ces informations.
                </P>
                <P>
                    Tous les informations indiquées sur le site temci-climatisation.fr
                    sont données à titre indicatif, et sont susceptibles d’évoluer. Par
                    ailleurs, les renseignements figurant sur le site
                    temci-climatisation.fr ne sont pas exhaustifs. Ils sont donnés sous
                    réserve de modifications ayant été apportées depuis leur mise en
                    ligne.
                </P>

                <Title>4. Limitations contractuelles sur les données techniques</Title>
                <P>
                    Le site utilise la technologie JavaScript.
                </P>
                <P>
                    Le site Internet ne pourra être tenu responsable de dommages
                    matériels liés à l’utilisation du site. De plus, l’utilisateur du
                    site s’engage à accéder au site en utilisant un matériel récent, ne
                    contenant pas de virus et avec un navigateur de dernière génération
                    mis-à-jour.
                </P>

                <Title>5. Propriété intellectuelle et contrefaçons</Title>
                <P>
                    T.E.M.C.I est propriétaire des droits de propriété intellectuelle ou
                    détient les droits d’usage sur tous les éléments accessibles sur le
                    site, notamment les textes, images, graphismes, logo, icônes, sons,
                    logiciels.
                </P>
                <P>
                    Toute reproduction, représentation, modification, publication,
                    adaptation de tout ou partie des éléments du site, quel que soit le
                    moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
                    préalable de : T.E.M.C.I.
                </P>
                <P>
                    Toute exploitation non autorisée du site ou de l’un quelconque des
                    éléments qu’il contient sera considérée comme constitutive d’une
                    contrefaçon et poursuivie conformément aux dispositions des articles
                    L.335-2 et suivants du Code de Propriété Intellectuelle.
                </P>

                <Title>6. Limitations de responsabilité</Title>
                <P>
                    T.E.M.C.I ne pourra être tenue responsable des dommages directs et
                    indirects causés au matériel de l’utilisateur, lors de l’accès au
                    site temci-climatisation.fr, et résultant soit de l’utilisation d’un
                    matériel ne répondant pas aux spécifications indiquées au point 4,
                    soit de l’apparition d’un bug ou d’une incompatibilité.
                </P>
                <P>
                    T.E.M.C.I ne pourra également être tenue responsable des dommages
                    indirects (tels par exemple qu’une perte de marché ou perte d’une
                    chance) consécutifs à l’utilisation du site temci-climatisation.fr.
                </P>
                <P>
                    Des espaces interactifs (possibilité de poser des questions dans
                    l’espace contact) sont à la disposition des utilisateurs.
                    T.E.M.C.I se réserve le droit de supprimer, sans mise en demeure
                    préalable, tout contenu déposé dans cet espace qui contreviendrait à
                    la législation applicable en France, en particulier aux dispositions
                    relatives à la protection des données.
                </P>
                <P>
                    Le cas échéant, T.E.M.C.I se réserve également la possibilité de
                    mettre en cause la responsabilité civile et/ou pénale de
                    l’utilisateur, notamment en cas de message à caractère raciste,
                    injurieux, diffamant, ou pornographique, quel que soit le support
                    utilisé (texte, photographie…).
                </P>

                <Title>7. Gestion des données personnelles</Title>
                <P>
                    En France, les données personnelles sont notamment protégées par la
                    loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
                    l'article L. 226-13 du Code pénal et la Directive Européenne du
                    24 octobre 1995.
                </P>
                <P>
                    À l'occasion de l'utilisation du site temci-climatisation.fr, peuvent
                    êtres recueillies : l'URL des liens par l'intermédiaire desquels
                    l'utilisateur a accédé au site temci-climatisation.fr, le fournisseur
                    d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de
                    l'utilisateur.
                </P>
                <P>
                    En tout état de cause T.E.M.C.I ne collecte des informations
                    personnelles relatives à l'utilisateur que pour le besoin de
                    certains services proposés par le site temci-climatisation.fr.
                </P>
                <P>
                    Conformément aux dispositions des articles 38 et suivants de la loi
                    78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux
                    libertés, tout utilisateur dispose d’un droit d’accès, de
                    rectification et d’opposition aux données personnelles le
                    concernant.
                </P>
                <P>
                    Aucune information personnelle de l'utilisateur du site
                    temci-climatisation.fr n'est publiée à l'insu de l'utilisateur,
                    échangée, transférée, cédée ou vendue sur un support quelconque à des
                    tiers.
                </P>
                <P>
                    Le site n'est pas déclaré à la CNIL car il ne recueille pas
                    d'informations personnelles.
                </P>
                <P>
                    Les bases de données sont protégées par les dispositions de la loi du
                    1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
                    relative à la protection juridique des bases de données.
                </P>

                <Title>8. Liens hypertextes et cookies</Title>
                <P>
                    Le site temci-climatisation.fr contient un certain nombre de liens
                    hypertextes vers d’autres sites, mis en place avec l’autorisation de
                    T.E.M.C.I. Cependant, T.E.M.C.I n’a pas la possibilité de vérifier le
                    contenu des sites ainsi visités, et n’assumera en conséquence aucune
                    responsabilité de ce fait.
                </P>
                <P>
                    La navigation sur le site temci-climatisation.fr est susceptible de
                    provoquer l’installation de cookie(s) sur l’ordinateur de
                    l’utilisateur.
                </P>

                <Title>9. Droit applicable et attribution de juridiction</Title>
                <P>
                    Tout litige en relation avec l’utilisation du site
                    temci-climatisation.fr est soumis au droit français. Il est fait
                    attribution exclusive de juridiction aux tribunaux compétents de
                    Paris.
                </P>

                <Title>10. Les principales lois concernées</Title>
                <P>
                    Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi
                    n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et
                    aux libertés.
                </P>
                <P>
                    Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
                    numérique.
                </P>

                <Title>11. Lexique</Title>
                <P>
                    <strong>Utilisateur :</strong> Internaute se connectant, utilisant le
                    site susnommé.
                </P>
                <P>
                    <strong>Informations personnelles :</strong> « les informations qui
                    permettent, sous quelque forme que ce soit, directement ou non,
                    l'identification des personnes physiques auxquelles elles
                    s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                </P>

                <Title>12. Politique de confidentialité</Title>
                <P>
                    Les données personnelles sont traitées dans le respect des lois en
                    vigueur et uniquement pour les besoins des services proposés sur le
                    site.
                </P>

            </div>

            <Footer />
        </>
    );
};

export default MentionsLegales;
