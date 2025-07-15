import {useMemo} from "react";

const useParsedText = (text) => {
    return useMemo(() => {
        if (!text || text.trim() === "") return null;
        const normalized = text.replace(/\\r\\n|\\n|\\r/g, "\n");
        const bulletRegex = /^([•●▪◦‣*-])\s+/;

        const hasBullets = normalized.split("\n").some((line) => bulletRegex.test(line.trim()))
        const lines = text.replace(/\\r\\n|\\n|\\r/g, "\n").split("\n");
        if (hasBullets) {
            const lines = normalized.split("\n");
            const elements = [];
            let listItems = [];

            lines.forEach((line, index) => {
                const trimmed = line.trim();

                if (bulletRegex.test(trimmed)) {
                    listItems.push(trimmed.replace(bulletRegex, ""));
                } 
                else {
                    if(listItems.length > 0) {
                        elements.push(
                            <ul key={`ul-${index}`} className="list-plaintext">
                                {listItems.map((item, i) => (
                                    <li key={`li-${index}-${i}`}>{item}</li>
                                ))}
                            </ul>
                        );
                        listItems = [];
                    }
                    if (trimmed === "") {
                        elements.push(
                            <p key={`p-${index}`} className="input-plaintext">
                                {trimmed}
                            </p>
                        );
                    }
                    else {
                        elements.push(<br key={`br-${index}`} />);
                    }
                }
            });

            if (listItems.length > 0) {
                elements.push(
                    <ul key="ul-last" className="list-plaintext">
                    {listItems.map((item, i) => (
                        <li key={`li-last-${i}`}>{item}</li>
                    ))}
                    </ul>
                );
            }
            console.log("Parsed Text:", elements);
            return elements;
        }
        
        const paragraph = normalized.split((/\n{2,}/));
        
        return paragraph.map((block, i) => (
            <p key={`p-${i}`} className="input-plaintext">
                {block.split("\n").flatMap((line, j, arr) => [
                    line,
                    j < arr.length - 1 && <br key={`br-${j}`} />,
                ])}
            </p>
        ));
    }, [text]);
};

export default useParsedText;