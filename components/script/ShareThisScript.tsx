// app/components/ShareThisScript.tsx

type Props = {
    id: string
}

const ShareThisScript: React.FC<Props> = ({ id }) => (
    <script
        src={`https://platform-api.sharethis.com/js/sharethis.js#property=${id}&product=sticky-share-buttons`}
        async
    />
);

export default ShareThisScript;