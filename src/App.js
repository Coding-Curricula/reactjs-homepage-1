import PagesRouter from "./routes/PagesRouter";

export default function App() {
    return (
        <div>
            <PagesRouter favoriteFood="hotdogs" />
        </div>
    );
}