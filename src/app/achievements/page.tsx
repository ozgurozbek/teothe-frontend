"use client";
import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { Card, Checkbox, Skeleton, Table, Modal, Button } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import type { ColumnsType } from "antd/es/table";
import achievementsData from "./achievements.json";

import SimpleContent from "@/components/SimpleCon";

interface AchievementType {
  key: React.Key;
  id: string;
  name: string;
  description: string;
  point: string;
  completed: boolean;
  completedBy?: string | null;
  achievers?: string[] | null;
}
interface UserPoints {
  user: string;
  totalPoints: number;
}
//exotic ass batuhan

function GetAchievementsData() {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);
  const [userPointsState, setUserPointsState] = useState<UserPoints[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const calculateUserPoints = useCallback((achievements: AchievementType[]): UserPoints[] => {
    const userPointsMap: { [user: string]: number } = {};

    achievements.forEach(({ achievers, point }) => {
      achievers?.forEach((user) => {
        if (!userPointsMap[user]) {
          userPointsMap[user] = 0;
        }
        userPointsMap[user] += parseInt(point, 10);
      });
    });
    return Object.entries(userPointsMap).map(([user, totalPoints]) => ({
      user,
      totalPoints,
    }));
  }, []);
  
  const pointOptions = useMemo(() => Array.from(new Set(achievementsData.achievements.map((a) => a.point))).map((point) => ({
    text: point,
    value: point,
  })), []);

  useEffect(() => {
    const initializedData = achievementsData.achievements.map((achievement, index) => ({
      ...achievement,
        key: index,
        completed: achievement.achievers?.includes(achievementsData.user) || false,
      })
    ).sort((a,b) => parseInt(a.id) - parseInt(b.id));

    setAchievements(initializedData);
  }, []);
  useEffect(() => {
    setUserPointsState(calculateUserPoints(achievements));
  }, [achievements, calculateUserPoints]);

  const handleCompletionToggle = useCallback((key: React.Key) => {
    setAchievements((prevAchievements) => {
      const achievementIndex = prevAchievements.findIndex((a) => a.key === key);
      if (achievementIndex !== -1) {
        const newAchievements = [...prevAchievements];
        const achievement = prevAchievements[achievementIndex];
        let newAchievers = achievement.achievers ? [...achievement.achievers] : [];
        if (achievement.completed) {
          newAchievers = newAchievers.filter((name) => name !== achievementsData.user);
        } else {
          newAchievers.push(achievementsData.user);
        }
        newAchievements[achievementIndex] = {
          ...achievement,
          achievers: newAchievers,
          completed: !achievement.completed,
        };
        return newAchievements;
      }
      return prevAchievements;
    });
  }, []);

  if (!achievementsData) return <Skeleton active />;

  

  const columns: ColumnsType<AchievementType> = [
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (_, record) => (
        <Checkbox
          checked={record.completed}
          onChange={() => handleCompletionToggle(record.key)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Points",
      dataIndex: "point",
      key: "point",
      sorter: (a, b) => parseInt(a.point) - parseInt(b.point),
      filters: pointOptions,
      onFilter: (value, record) => record.point.toString() === value,
    },
    {
      title: "Number Of People",
      dataIndex: "numberOfPeople",
      key: "numberOfPeople",
      render: (_, record) => record.achievers?.length || 0,
    },

    {
      title: "Completed By",
      dataIndex: "completedBy",
      key: "completedBy",
      render: (_, record) => record.achievers?.join(", ") || "N/A",
    },
  ];
  const userPointsColumns: ColumnsType<UserPoints> = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Total Points",
      dataIndex: "totalPoints",
      key: "totalPoints",
      sorter: (a, b) => a.totalPoints - b.totalPoints,
      defaultSortOrder: 'descend',
    },
  ];

  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Achievements",
          text: [
            "Displays the achievements that players can earn. Each achievement has a unique criteria and points associated with it. Your Teothe achievements have been reset. You must not alter the gameplay to gain achievements.",
          ],
        }}
      />
      <Button type="primary" onClick={showModal}>
        Show Leaderboard
      </Button>
      <Modal
        title="Leaderboard"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Ok
          </Button>,
        ]}
      >
        <Table
          dataSource={userPointsState}
          columns={userPointsColumns}
          pagination={false}
        />
      </Modal>
      <Table
        className="mt-4"
        dataSource={achievements}
        columns={columns}
        pagination={false}
        scroll={{ x: 1200 }}
      />
    </>
  );
}

function AchievementsPageComponent() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K, Achievements"} />
      <Card bordered={false} className="w-full">
        {GetAchievementsData()}
      </Card>
    </section>
  );
}

const AchievementsPage = memo(AchievementsPageComponent);

export default AchievementsPage;