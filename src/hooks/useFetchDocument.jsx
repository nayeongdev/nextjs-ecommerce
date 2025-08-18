import {db} from '@/firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'

const useFetchDocument = (collectionName, documentId) => {
    const [document, setDocument] = useState(null);

    const getDocument = useCallback(async () => {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const obj = {
                id: documentId,
                ...docSnap.data(),
            }
            setDocument(obj);
        } else {
            console.log('No such document!');
        }
    }, [collectionName, documentId]);

    useEffect(() => {
        getDocument();
    }, [getDocument]);

    return {document};
}

export default useFetchDocument;