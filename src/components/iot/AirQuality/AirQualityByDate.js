import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ResponsiveLine } from '@nivo/line';

const getAirQualityByDate = (date) => {
    return axios.get(`http://127.0.0.1:8000/air-quality/?date=${date}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching air quality:', error);
            if (error.response && error.response.status === 404) {
                toast.error('Data not found.');
            } else {
                toast.error(`Error fetching air quality: ${error.message}`);
            }
            throw error;
        });
};

const AirQualityByDate = () => {
    const { date } = useParams(); // Get the date from the URL
    const [airData, setAirData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;
        getAirQualityByDate(date)
            .then(data => {
                if (mounted) {
                    setAirData(data);
                }
            })
            .catch(error => {
                console.error('Error fetching air quality:', error);
                toast.error(`Error fetching air quality: ${error.message}`);
            });

        return () => (mounted = false);
    }, [date]);

    const thresholds = {
        pm2_5: { safe: 12, warning: 35.4, danger: 55.4 },
        pm10: { safe: 54, warning: 154, danger: 254 },
        co2: { safe: 1000, warning: 2000, danger: 5000 },
        humidity: { safe: 40, warning: 60, danger: 80 },
        temperature: { safe: 20, warning: 30, danger: 40 },
    };

    const getColor = (value, metric) => {
        const { safe, warning, danger } = thresholds[metric];
        if (value <= safe) return '#4bc0c0'; // Safe
        if (value <= warning) return '#ffce56'; // Warning
        return '#ff6384'; // Danger
    };

    const createChartData = (label, data, metric) => {
        return [
            {
                id: label,
                data: data.map((item, index) => ({
                    x: item.timestamp.split('T')[1],
                    y: item.value,
                    color: getColor(item.value, metric),
                    id: item.id, // Include ID for navigation
                })),
            },
        ];
    };

    const handlePointClick = (point) => {
        const itemId = point.data.id;
        if (itemId) {
            navigate(`/air-quality/${itemId}`);
        }
    };

    const Chart = ({ label, data, metric }) => (
        <div style={{ height: '400px', marginBottom: '20px' }}>
            <ResponsiveLine
                data={createChartData(label, data, metric)}
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
                axisBottom={{
                    legend: 'Time',
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                axisLeft={{
                    legend: `${label} Levels`,
                    legendOffset: -50,
                    legendPosition: 'middle',
                }}
                pointSize={10}
                pointBorderWidth={2}
                pointLabelYOffset={-12}
                pointColor={{ from: 'color' }}
                enableSlices="x"
                useMesh={true}
                onClick={handlePointClick}
            />
        </div>
    );

    return (
        <div className="container-fluid">
            <h2>Air Quality Data for {date}</h2>
            {airData.length > 0 ? (
                <>
                    <Chart
                        label="PM2.5"
                        data={airData.map(item => ({ value: item.pm2_5, timestamp: item.timestamp, id: item.id }))}
                        metric="pm2_5"
                    />
                    <Chart
                        label="PM10"
                        data={airData.map(item => ({ value: item.pm10, timestamp: item.timestamp, id: item.id }))}
                        metric="pm10"
                    />
                    <Chart
                        label="CO2"
                        data={airData.map(item => ({ value: item.co2, timestamp: item.timestamp, id: item.id }))}
                        metric="co2"
                    />
                    <Chart
                        label="Humidity"
                        data={airData.map(item => ({ value: item.humidity, timestamp: item.timestamp, id: item.id }))}
                        metric="humidity"
                    />
                    <Chart
                        label="Temperature"
                        data={airData.map(item => ({ value: item.temperature, timestamp: item.timestamp, id: item.id }))}
                        metric="temperature"
                    />
                </>
            ) : (
                <p>No data found for this date.</p>
            )}
            <ToastContainer />
        </div>
    );
};

export default AirQualityByDate;
