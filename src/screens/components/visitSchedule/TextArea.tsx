export interface TextAreaProps {
    onChange: any;
    rows: number;
    cols: number;
    maxlength:number;
}

const TextArea = (props: TextAreaProps) => {
    return(
        <>
             <textarea
                  rows={props.rows}
                  cols={props.cols}
                  maxLength={props.maxlength}
                  placeholder="Type your message here..."
                  style={{ width: "100%" }}
                  className="pt-3 FormTextArea"
                  onChange={props.onChange}
                 />
        </>
    )
}

export default TextArea